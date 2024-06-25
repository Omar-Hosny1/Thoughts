import { Box, FormLabel, useDisclosure } from '@chakra-ui/react';
import { ErrorMessage, FieldArray, Formik } from 'formik';
import { motion } from 'framer-motion';
import type { IJoditEditorProps } from 'jodit-react';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import type AddThoughtFormType from '@/utils/types/AddThoughtForm';
import AddThoughtSchema from '@/validations/add-tought-form-schema';

import Button from '../base/button';
import Input from '../base/input';
import Modal from '../base/modal';
import TagsWrapper from '../common/tags-wrapper';
import Thought from '../common/thought';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
const initialValues: AddThoughtFormType = {
  thoughtBody: '',
  tags: [],
  thoughtTitle: '',
};

function AddThoughtForm() {
  const config: IJoditEditorProps['config'] = useMemo(
    () => ({
      placeholder: 'immerse your self...',
      style: {
        backgroundColor: '#1D1D1D',
      },
      className: 'joditor',
      readonly: false,
      cache: true,
    }),
    [],
  );

  function onEnterKeyClicked(
    e: React.KeyboardEvent<HTMLInputElement>,
    tags: string[],
    push: (enteredValue: string) => void,
  ) {
    const enteredValue: string = (e.target as any).value;
    if (e.key === 'Enter' && enteredValue.trim() !== '') {
      e.preventDefault();
      if (tags.includes(enteredValue)) {
        return;
      }
      push(enteredValue);
      (e.target as any).value = '';
    }
  }
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    // <Box paddingStart="10px" h="100%" overflow="scroll">
    <Formik
      validationSchema={AddThoughtSchema}
      initialValues={initialValues}
      onSubmit={(_, formikProps) => {
        formikProps.validateForm();
      }}
    >
      {(formik) => {
        return (
          <Box p="10px" w="100%">
            <FormLabel
              mb="5px"
              htmlFor="thoughtTitle"
              fontSize="18px"
              color="secondary"
            >
              Thought Title
            </FormLabel>
            <Input
              w="100%"
              color="secondary"
              roundedFlatFrom="none"
              placeholder="Share Your Thoughts Now"
              _placeholder={{
                color: 'grey',
                fontSize: '13px',
              }}
              mb="5px"
              {...formik.getFieldProps('thoughtTitle')}
            />
            <ErrorMessage
              name="thoughtTitle"
              component="span"
              className="error-msg"
            />

            <FormLabel mb="5px" fontSize="18px" color="secondary">
              Thought Body
            </FormLabel>
            <JoditEditor
              config={config}
              onBlur={(newValue) => {
                formik.setFieldValue('thoughtBody', newValue);
                if (formik.touched.thoughtBody !== true) {
                  formik.setFieldTouched('thoughtBody', true);
                }
              }}
              value={formik.values.thoughtBody}
            />
            <Box h="5px" />
            <ErrorMessage
              name="thoughtBody"
              component="span"
              className="error-msg"
            />
            <FormLabel fontSize="18px" color="secondary">
              Thought Tags
            </FormLabel>
            <FieldArray name="tags">
              {(formikArrayProps) => (
                <>
                  <Input
                    w="100%"
                    withIcon
                    onBlur={() => formik.setFieldTouched('tags', true)}
                    iconPositon="right"
                    iconSrc="/icons/enter-key.svg"
                    roundedFlatFrom="left"
                    color="secondary"
                    placeholder="Share Your Thoughts Now"
                    _placeholder={{
                      color: 'grey',
                      fontSize: '13px',
                    }}
                    mb="10px"
                    isDisabled={formik.values.tags.length === 5}
                    onKeyDown={(e) =>
                      onEnterKeyClicked(
                        e,
                        formik.values.tags,
                        formikArrayProps.push,
                      )
                    }
                  />
                  <TagsWrapper
                    formik={formikArrayProps}
                    tags={formik.values.tags}
                  />
                  <ErrorMessage
                    name="tags"
                    component="span"
                    className="error-msg"
                  />
                </>
              )}
            </FieldArray>
            <Button
              w="100%"
              isDisabled={!formik.isValid || !formik.dirty}
              onClick={() => {
                onOpen();
              }}
              padding="24px"
              styleVariants="outline"
              roundedFlatFrom="left"
              gap={3}
              styleText={{
                fontSize: '17px',
              }}
              rounded="15px"
              icon="/icons/publish.svg"
              iconPosition="left"
              justifyContent="center"
              mt="10px !important"
              iconSize={28}
            >
              Preview Thought
            </Button>
            <Modal
              addCloseBtn={false}
              ModalContentStyling={{ bg: 'unset' }}
              isOpen={isOpen}
              onClose={onClose}
              isCentered
              closeOnOverlayClick
              size="xlg"
            >
              <motion.div
                animate={{
                  scale: 1,
                }}
                style={{
                  transition: '0.5s',
                  scale: 0.9,
                }}
              >
                <Thought
                  thoughtStyling={{
                    borderBottomWidth: 0,
                    bg: 'primary',
                    overflowY: 'scroll',
                  }}
                  thought={{
                    id: '5',
                    isAdmin: false,
                    isApproved: true,
                    approvedDate: null,
                    publishedDate: new Date(),
                    looks: 150,
                    reposts: 20000,
                    tags: formik.values.tags,
                    thoughtBody: formik.values.thoughtBody,
                    thoughtTitle: formik.values.thoughtTitle,
                  }}
                />
              </motion.div>
            </Modal>
            <Button
              w="100%"
              onClick={formik.submitForm}
              padding="24px"
              styleVariants="base"
              roundedFlatFrom="left"
              withIcon
              gap={3}
              styleText={{
                fontSize: '17px',
              }}
              rounded="15px"
              icon="/icons/publish.svg"
              iconPosition="left"
              justifyContent="center"
              mt="10px !important"
              iconSize={28}
            >
              Publish Thought
            </Button>
          </Box>
        );
      }}
    </Formik>
  );
}
export default AddThoughtForm;
