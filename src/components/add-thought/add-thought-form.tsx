'use client';

import { Box, FormLabel, useDisclosure } from '@chakra-ui/react';
import { ErrorMessage, FieldArray, Formik } from 'formik';
import type { IJoditEditorProps } from 'jodit-react';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import type AddThoughtFormType from '@/utils/types/AddThoughtForm';
import AddThoughtSchema from '@/validations/add-tought-form';

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
      className: 'aa',
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
    <Formik
      w="100%"
      validationSchema={AddThoughtSchema}
      paddingStart="10px"
      initialValues={initialValues}
      onSubmit={(values, formikProps) => {
        formikProps.validateForm();
        console.log('values');
        console.log(values);
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
                console.log(newValue);
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
              isDisabled={!formik.isValid}
              onClick={onOpen}
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
              addNiceOverly
              addCloseBtn={false}
              ModalContentStyling={{ bg: 'unset' }}
              isOpen={isOpen}
              onClose={onClose}
              size="xl"
              closeOnOverlayClick
            >
              <Thought
                thoughtStyling={{
                  borderBottomWidth: 0,
                  bg: 'primary',
                }}
                thought={{
                  id: '5',
                  isAdmin: false,
                  publishedDate: new Date(),
                  tags: formik.values.tags,
                  thoughtBody: formik.values.thoughtBody,
                  thoughtTitle: formik.values.thoughtTitle,
                }}
              />
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
