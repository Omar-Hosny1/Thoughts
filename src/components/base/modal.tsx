import type { ModalContentProps, ModalProps } from '@chakra-ui/react';
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
  title?: string | null;
  ModalContentStyling?: ModalContentProps;
  addNiceOverly?: boolean;
  addCloseBtn?: boolean;
}

function Modal({
  title,
  children,
  ModalContentStyling,
  addNiceOverly,
  addCloseBtn = true,
  ...props
}: Props) {
  return (
    <BaseModal isCentered {...props}>
      {addNiceOverly ? (
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
      ) : (
        <ModalOverlay />
      )}
      <ModalContent
        bg="#232323"
        mx="30px"
        rounded="2xl"
        pb="10px"
        {...ModalContentStyling}
      >
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {title ? <Text>{title}</Text> : null}
          {addCloseBtn ? (
            <ModalCloseButton
              pos="unset"
              _hover={{ bg: 'gray.300', color: 'primary' }}
              color="gray.200"
            />
          ) : null}
        </ModalHeader>
        <ModalBody pt={0}>{children}</ModalBody>
      </ModalContent>
    </BaseModal>
  );
}

export default Modal;
