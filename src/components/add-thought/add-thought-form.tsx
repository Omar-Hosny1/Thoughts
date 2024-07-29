'use client';

import { Box, FormLabel, useDisclosure } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { createThought } from 'actions/thought';
import { ErrorMessage, FieldArray, Formik } from 'formik';
import { motion } from 'framer-motion';
import type { IJoditEditorProps } from 'jodit-react';
import JoditEditor from 'jodit-react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import type * as yup from 'yup';

import { onErrorQueryHandler } from '@/utils/helpers/on-error-query';
import { useShowToast } from '@/utils/hooks/use-show-toast';
import AddThoughtSchema from '@/validations/add-tought-form-schema';

import Button from '../base/button';
import Input from '../base/input';
import Modal from '../base/modal';
import TagsWrapper from '../common/tags-wrapper';
import Thought from '../common/thought';

const initialValues: yup.InferType<typeof AddThoughtSchema> = {
  thoughtContent: '',
  tags: [],
};

function AddThoughtForm() {
  const toast = useShowToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const config: IJoditEditorProps['config'] = useMemo(
    () => ({
      iframe: false,
      placeholder: 'immerse your self...',
      style: {
        backgroundColor: '#1D1D1D',
      },
      removeButtons: ['brush'],
      className: 'joditor',
      readonly: false,
      cache: true,
      defaultActionOnPaste: 'insert_only_text',
      colorPickerDefaultTab: 'color',
      colors: [],
    }),
    [],
  );
  const { mutate, isLoading } = useMutation(createThought, {
    onError: (error) => onErrorQueryHandler(error, toast),
    onSuccess(data) {
      toast(data.message, 'success');
      router.replace(`/thought/${data.thought.id}`);
    },
  });

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
  return (
    <Formik
      validationSchema={AddThoughtSchema}
      initialValues={initialValues}
      onSubmit={(values, formikProps) => {
        formikProps.validateForm();
        mutate(values);
      }}
    >
      {(formik) => {
        return (
          <Box p="10px" w="100%">
            <FormLabel mb="5px" fontSize="18px" color="secondary">
              Thought Content
            </FormLabel>
            <JoditEditor
              config={config}
              onBlur={(newValue) => {
                formik.setFieldTouched('thoughtContent', true);
                formik.setFieldValue('thoughtContent', newValue);
              }}
              value={formik.values.thoughtContent || ''}
            />
            <Box h="5px" />
            <ErrorMessage
              name="thoughtContent"
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
              Preview Thought Before Publishing
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
                  userId=""
                  thoughtConfig={{
                    borderBottomWidth: 0,
                    bg: 'primary',
                    overflowY: 'scroll',
                  }}
                  isAdmin={false}
                  thought={{
                    id: '5',
                    isApproved: true,
                    approvedDate: null,
                    publishedDate: new Date(),
                    looks: 150,
                    reposts: 20000,
                    createdDate: new Date(),
                    userId: 'sda',
                    tags: formik.values.tags,
                    thoughtContent: formik.values.thoughtContent || 's',
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
              isLoading={isLoading}
              isDisabled={!formik.isValid || !formik.dirty || isLoading}
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
