import { Box, Select } from '@chakra-ui/react';
import type { FieldArrayRenderProps } from 'formik';
import { ErrorMessage, FieldArray, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/base/button';
import Input from '@/components/base/input';
import ThoughtsLogo from '@/components/common/logo';
import TagsWrapper from '@/components/common/tags-wrapper';
import Text from '@/components/common/text';
import type SignUpFormType from '@/utils/types/SignUpForm';
import SignUpFormSchema, {
  getTodayDate,
} from '@/validations/signup-form-schema';

const initialValues: SignUpFormType = {
  confirmPassword: '',
  dateOfBirth: '',
  email: '',
  gender: '',
  interests: [],
  name: '',
  password: '',
};

function Signup() {
  const onChangeinterestsSelectHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    interests: string[],
    fieldArrayProps: FieldArrayRenderProps,
  ) => {
    const selectedValue = e.target.value;
    if (interests.includes(selectedValue) || selectedValue === '') {
      e.target.value = '';
      return;
    }
    fieldArrayProps.push(selectedValue);
    e.target.value = '';
  };

  const router = useRouter();
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <ThoughtsLogo />
      </Box>
      <Box p="10px">
        <Text fontSize="25px" lineHeight={1.5}>
          Welcome To Thoughts.
        </Text>
        <Text fontSize="16px" lineHeight={1} color="grey">
          Write your first thought now... Be Limitless
        </Text>
        <Formik
          validationSchema={SignUpFormSchema}
          onSubmit={(_, formikProps) => {
            formikProps.validateForm();
          }}
          initialValues={initialValues}
        >
          {(formik) => (
            <Box display="flex" mt="20px" gap="10px" flexDir="column">
              <Input
                {...formik.getFieldProps('name')}
                roundedFlatFrom="right"
                placeholder="Name"
                w={{ base: '300px', md: '500px', lg: '700px' }}
                py="20px"
              />
              <ErrorMessage
                component="span"
                className="text-red-400"
                name="name"
              />
              <Input
                roundedFlatFrom="right"
                placeholder="Email"
                w={{ base: '300px', md: '500px', lg: '700px' }}
                py="20px"
                {...formik.getFieldProps('email')}
              />
              <ErrorMessage
                component="span"
                className="text-red-400"
                name="email"
              />
              <Input
                roundedFlatFrom="right"
                placeholder="Password"
                type="password"
                w={{ base: '300px', md: '500px', lg: '700px' }}
                py="20px"
                {...formik.getFieldProps('password')}
              />
              <ErrorMessage
                component="span"
                className="text-red-400"
                name="password"
              />
              <Input
                roundedFlatFrom="right"
                placeholder="Confirm Password"
                type="password"
                w={{ base: '300px', md: '500px', lg: '700px' }}
                py="20px"
                {...formik.getFieldProps('confirmPassword')}
              />
              <ErrorMessage
                component="span"
                className="text-red-400"
                name="confirmPassword"
              />
              <Input
                type="date"
                color="secondary"
                roundedFlatFrom="right"
                placeholder="Date Of Birth"
                w={{ base: '300px', md: '500px', lg: '700px' }}
                py="20px"
                withIcon
                iconPositon="right"
                iconSrc="/icons/date-picker.svg"
                pe="10px"
                max={getTodayDate()}
                {...formik.getFieldProps('dateOfBirth')}
              />
              <ErrorMessage
                component="span"
                className="text-red-400"
                name="dateOfBirth"
              />
              <Select
                borderTopRightRadius="0"
                color="secondary"
                placeholder="Choose Your Gender"
                {...formik.getFieldProps('gender')}
              >
                <option>Male</option>
                <option>Female</option>
              </Select>
              <ErrorMessage
                component="span"
                className="text-red-400"
                name="gender"
              />
              <FieldArray name="interests">
                {(fieldArrayProps) => (
                  <>
                    <Select
                      // eslint-disable-next-line tailwindcss/no-custom-classname
                      className="interests-select"
                      onBlur={() => {
                        formik.setFieldTouched('interests', true);
                      }}
                      borderTopRightRadius="0"
                      onChange={(e) =>
                        onChangeinterestsSelectHandler(
                          e,
                          formik.values.interests,
                          fieldArrayProps,
                        )
                      }
                      placeholder="Choose Your Interests"
                      color="secondary"
                    >
                      <option value="Programming">Programming</option>
                      <option value="UX">UX</option>
                      <option value="UI">UI</option>
                    </Select>
                    {formik.values.interests.length ? (
                      <TagsWrapper
                        tags={formik.values.interests}
                        isEditingMode
                        formik={fieldArrayProps}
                      />
                    ) : null}
                  </>
                )}
              </FieldArray>

              <ErrorMessage
                component="span"
                className="text-red-400"
                name="interests"
              />
              <Button
                icon="/icons/signup.svg"
                iconPosition="left"
                onClick={() => formik.handleSubmit()}
                styleVariants="base"
                withIcon
              >
                Sign Up
              </Button>
              <Button
                onClick={() => {
                  router.push('/auth/login');
                }}
                icon="/icons/login.svg"
                iconPosition="right"
                styleVariants="outline"
                withIcon
              >
                Already have an account? Login
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Signup;
