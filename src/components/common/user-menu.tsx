import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

import { useCurrentUser } from '@/utils/hooks/use-current-user';

import Text from './text';
import ThemeToggleButton from './theme-toggle-button';
import UserAvatar from './user-avatar';

function UserMenu() {
  const user = useCurrentUser();
  return (
    <Menu>
      <MenuButton as={Box}>
        <Flex
          border="1px solid grey"
          gap="12px"
          cursor="pointer"
          padding="5px"
          borderRadius="10px"
          transition="0.3s"
        >
          <Box display={{ base: 'none', md: 'initial' }}>
            <Text fontSize="2xl" lineHeight={1}>
              {user?.name || 'N/A'}
            </Text>
            <Text fontSize="12px" color="gray.300" lineHeight="1.3">
              {user?.userRole || 'N/A'}
            </Text>
          </Box>
          <UserAvatar
            tooltipLabel={user?.name || 'N/A'}
            userName={user?.name || 'N/A'}
            imageSrc={user?.image || undefined}
          />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem display="flex" justifyContent="space-between">
          <Text>Theme</Text>
          <ThemeToggleButton as={Box} />
        </MenuItem>
        <MenuItem display="flex" justifyContent="space-between">
          <Text>Logout</Text>
          <AiOutlineLogout size="30px" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
