import type { ModalProps } from '@chakra-ui/react';
import {
  Modal as BaseModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

import Text from '../common/text';

interface Props extends ModalProps {
  title: string;
}

function Modal({ title, children, ...props }: Props) {
  return (
    <BaseModal isCentered {...props}>
      <ModalOverlay />
      <ModalContent bg="#232323" mx="30px" rounded="2xl" pb="10px">
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>{title}</Text>
          <ModalCloseButton
            pos="unset"
            _hover={{ bg: 'gray.300', color: 'primary' }}
            color="gray.200"
          />
        </ModalHeader>
        <ModalBody pt={0}>{children}</ModalBody>
      </ModalContent>
    </BaseModal>
  );
}

export default Modal;
