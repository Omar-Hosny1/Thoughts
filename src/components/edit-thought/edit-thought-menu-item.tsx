import { MenuItem, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import type IThought from '@/utils/interfaces/thought';
import { useThemeColor } from '@/utils/theme/theme-colors-provider';

// eslint-disable-next-line import/no-cycle
import AddThoughtForm from '../add-thought/add-thought-form';
import Modal from '../base/modal';
import Text from '../common/text';

function EditThoughtMenuItem({ thought }: { thought: IThought }) {
  const { primaryColor } = useThemeColor();
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <>
      <MenuItem color={primaryColor} onClick={onOpen}>
        <Text>Edit</Text>
      </MenuItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'md', md: '2xl' }}
        title="Edit your thought"
      >
        <AddThoughtForm editedThought={thought} onCloseEditModal={onClose} />
      </Modal>
    </>
  );
}

export default EditThoughtMenuItem;
