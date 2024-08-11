'use client';

import { Box, FormLabel } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { createThought, updateThought } from 'actions/thought';
import { ErrorMessage, FieldArray, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import type * as yup from 'yup';

import { onErrorQueryHandler } from '@/utils/helpers/on-error-query';
import { useShowToast } from '@/utils/hooks/use-show-toast';
import type IThought from '@/utils/interfaces/thought';
import { queryClient } from '@/utils/query-client';
import AddThoughtSchema from '@/validations/add-tought-form-schema';

import Button from '../base/button';
import Input from '../base/input';
import TagsWrapper from '../common/tags-wrapper';
// eslint-disable-next-line import/no-cycle
import PreviewThougth from './preview-thougth';
// import PreviewThougth from './preview-thougth';
import ThoughtContentInput from './thought-content-input';

interface AddThoughtFormProps {
  editedThought?: IThought;
  onCloseEditModal?: () => void;
}

function AddThoughtForm({
  editedThought,
  onCloseEditModal,
}: AddThoughtFormProps) {
  const toast = useShowToast();
  const router = useRouter();
  const initialValues: yup.InferType<typeof AddThoughtSchema> = {
    thoughtContent: editedThought?.thoughtContent || '',
    tags: editedThought?.tags || [],
  };

  const { mutate: mutateCreateThought, isLoading: createThoughtIsLoading } =
    useMutation(createThought, {
      onError: (error) => onErrorQueryHandler(error, toast),
      onSuccess(data) {
        if (data.thought.status === 'approved') {
          toast(data.message, 'success');
          router.replace(`/thought/${data.thought.id}`);
        } else {
          toast(data.message, 'success', 'Wait to be approved by the admin');
          router.replace(`/home`);
        }
      },
    });

  const { mutate: mutateUpdateThought, isLoading: updateThoughtIsLoading } =
    useMutation(updateThought, {
      onError: (error) => onErrorQueryHandler(error, toast),
      onSuccess(data) {
        queryClient.invalidateQueries(['thoughts']);
        toast(data.message, 'success');
        onCloseEditModal!();
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
        if (editedThought) {
          mutateUpdateThought({
            ...editedThought,
            thoughtContent: values.thoughtContent!,
            tags: values.tags,
          });
          return;
        }
        mutateCreateThought(values);
      }}
    >
      {(formik) => {
        return (
          <Box p="10px" w="100%">
            <ThoughtContentInput
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
            <PreviewThougth formik={formik} />
            <Button
              w="100%"
              onClick={formik.submitForm}
              padding="24px"
              styleVariants="base"
              roundedFlatFrom="left"
              withIcon
              gap={3}
              isLoading={createThoughtIsLoading || updateThoughtIsLoading}
              isDisabled={
                !formik.isValid ||
                !formik.dirty ||
                createThoughtIsLoading ||
                updateThoughtIsLoading
              }
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
              {editedThought ? 'Edit Thought' : 'Publish Thought'}
            </Button>
          </Box>
        );
      }}
    </Formik>
  );
}
export default AddThoughtForm;
