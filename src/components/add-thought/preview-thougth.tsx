import { useDisclosure } from '@chakra-ui/react';
import type { FormikProps } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

import Button from '../base/button';
import Modal from '../base/modal';
import Thought from '../common/thought';

interface PreviewThougthProps {
  formik: FormikProps<{
    thoughtContent?: string | undefined;
    tags: string[];
  }>;
}

function PreviewThougth({ formik }: PreviewThougthProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { primaryColor } = useThemeColor();

  return (
    <>
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
              bg: primaryColor,
              overflowY: 'scroll',
            }}
            isAdmin={false}
            thought={{
              id: '5',
              rejectedDate: new Date(),
              status: 'approved',
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
    </>
  );
}

export default PreviewThougth;
