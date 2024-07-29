import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { deleteThoughtById } from 'actions/thought';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiDotsVertical } from 'react-icons/bi';

import { onErrorQueryHandler } from '@/utils/helpers/on-error-query';
import { useShowToast } from '@/utils/hooks/use-show-toast';
import { queryClient } from '@/utils/query-client';

function ThoughtMenuList({ id }: { id: string }) {
  const toast = useShowToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const { mutate: deleteThought } = useMutation(() => deleteThoughtById(id), {
    onError: (error) => onErrorQueryHandler(error, toast),
    onSuccess(data) {
      queryClient.invalidateQueries(['thoughts']);
      toast(data.message, 'success');
      router.replace('/home');
      onClose();
    },
  });
  return (
    <Menu onClose={onClose} onOpen={onOpen} isOpen={isOpen} closeOnSelect>
      <MenuButton
        as={Box}
        pos="absolute"
        right="0"
        w="40px"
        h="40px"
        borderRadius="15px"
        className="flex items-center justify-center"
      >
        <BiDotsVertical color="#EEE5E9" size="25px" />
      </MenuButton>
      <MenuList>
        <MenuItem color="primary">Edit</MenuItem>
        <MenuItem color="primary" onClick={() => deleteThought()}>
          Remove
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ThoughtMenuList;
