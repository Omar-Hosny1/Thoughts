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
import type IThought from '@/utils/interfaces/thought';
import { queryClient } from '@/utils/query-client';
import { useThemeColor } from '@/utils/theme/theme-colors-provider';

import Text from './common/text';
// eslint-disable-next-line import/no-cycle
import EditThoughtMenuItem from './edit-thought/edit-thought-menu-item';
// import EditThoughtMenuItem from './edit-thought/edit-thought-menu-item';

interface ThoughtMenuListProps {
  thought: IThought;
}

function ThoughtMenuList({ thought }: ThoughtMenuListProps) {
  const { primaryColor, secondaryColor } = useThemeColor();

  const toast = useShowToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const { mutate: deleteThought } = useMutation(
    () => deleteThoughtById(thought.id),
    {
      onError: (error) => onErrorQueryHandler(error, toast),
      onSuccess(data) {
        queryClient.invalidateQueries(['thoughts']);
        toast(data.message, 'success');
        router.replace('/home');
        onClose();
      },
    },
  );
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
        <BiDotsVertical color={secondaryColor} size="25px" />
      </MenuButton>
      <MenuList>
        <EditThoughtMenuItem thought={thought} />
        <MenuItem color={primaryColor} onClick={() => deleteThought()}>
          <Text>Remove</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ThoughtMenuList;
