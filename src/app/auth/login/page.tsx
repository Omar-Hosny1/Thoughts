'use client';

import { Box } from '@chakra-ui/react';
import { ErrorMessage, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '@/components/base/button';
import Input from '@/components/base/input';
import ThoughtsLogo from '@/components/common/logo';
import Text from '@/components/common/text';
import type LoginFormType from '@/utils/types/LoginForm';
import LoginFormSchema from '@/validations/login-form-schema';

const initialValues: LoginFormType = {
  email: '',
  password: '',
};

function Login() {
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
          Welcome Back To Thoughts.
        </Text>
        <Text fontSize="16px" lineHeight={1} color="grey">
          Write your first thought now... Be Limitless
        </Text>
        <Formik
          validationSchema={LoginFormSchema}
          onSubmit={(_, formikProps) => {
            formikProps.validateForm();
          }}
          initialValues={initialValues}
        >
          {(formik) => (
            <Box display="flex" mt="20px" gap="10px" flexDir="column">
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
              <Button
                icon="/icons/signup.svg"
                iconPosition="left"
                onClick={() => formik.handleSubmit()}
                styleVariants="base"
                withIcon
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  router.push('/auth/register');
                }}
                icon="/icons/login.svg"
                iconPosition="right"
                styleVariants="outline"
                withIcon
              >
                Do not have an account? Sign Up
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Login;
