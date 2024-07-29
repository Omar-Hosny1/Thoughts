import { useToast } from '@chakra-ui/react';

export const useShowToast = () => {
  const toast = useToast();

  const showToast = (
    description: string,
    status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined,
    title: string = status === 'error'
      ? 'Something went wrong!'
      : 'Done successfuly!',
    duration = 5000,
    isClosable = true,
  ) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      position: 'top-right', // You can set a default position here
    });
  };

  return showToast;
};
