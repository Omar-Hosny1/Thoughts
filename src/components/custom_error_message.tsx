import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';

interface CustomErrorMessageProps extends TextProps {
  errorMessage: string | undefined;
  isTouched: boolean | undefined;
}

function CustomErrorMessage({
  errorMessage,
  isTouched,
  ...props
}: CustomErrorMessageProps) {
  return isTouched && errorMessage ? (
    <Text {...props} color="red" fontSize="15px">
      {errorMessage}
    </Text>
  ) : null;
}

export default CustomErrorMessage;
