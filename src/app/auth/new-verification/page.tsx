'use client';

import { Box } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { verifyEmail } from 'actions/verify-email';
import type { AxiosError } from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { SyncLoader } from 'react-spinners';

import ThoughtsLogo from '@/components/common/logo';
import Text from '@/components/common/text';

function NewVerificationPage() {
  const params = useSearchParams();
  const token = params.get('token');

  const { isLoading, mutate, isError, isSuccess, error } =
    useMutation(verifyEmail);

  useEffect(() => {
    if (isError || isSuccess) return;
    if (!token) {
      return;
    }
    mutate(token || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <Box className="flex h-[90vh] items-center justify-center">
      <Box
        className="flex flex-col items-center justify-center rounded-md p-10 text-center"
        backgroundColor="secondary"
        w={{ base: '270px', md: '400px' }}
      >
        <ThoughtsLogo color="primary" />
        <Text color="primary">
          {token ? 'Verifying your email' : 'We are Missing your token'}
        </Text>
        {isLoading ? (
          <Box className="mt-[25px] ">
            <SyncLoader />
          </Box>
        ) : null}
        {isSuccess ? (
          <Box className="my-3 w-full bg-green-300 p-2">
            <Text color="green.700" fontWeight="semi-bold">
              Your Email Verified Successfully
            </Text>
          </Box>
        ) : null}
        {isError ? (
          <Box className="my-3 w-full bg-red-300 p-2">
            <Text color="red.700" fontWeight="semi-bold">
              {((error as AxiosError).response?.data as any).message ||
                'There was an error verifying your email'}
            </Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default NewVerificationPage;
