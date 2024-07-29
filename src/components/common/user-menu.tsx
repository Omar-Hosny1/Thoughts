import { Avatar, Box, Flex, Tooltip } from '@chakra-ui/react';
import React from 'react';

import { useCurrentUser } from '@/utils/hooks/use-current-user';

import Text from './text';

function UserMenu() {
  const user = useCurrentUser();
  return (
    <Flex
      gap="12px"
      cursor="pointer"
      padding="5px"
      borderRadius="10px"
      transition="0.3s"
      _hover={{ bg: 'grey' }}
    >
      <Box display={{ base: 'none', md: 'initial' }}>
        <Text fontSize="2xl" lineHeight={1}>
          {user?.name || 'N/A'}
        </Text>
        <Text fontSize="12px" color="gray.300" lineHeight="1.3">
          {user?.userRole || 'N/A'}
        </Text>
      </Box>
      <Tooltip label={user?.name || 'N/A'} placement="bottom">
        <Avatar
          bg="secondary"
          color="primary"
          name={user?.name || 'N/A'}
          src={user?.image || undefined}
        />
      </Tooltip>
    </Flex>
  );
}

export default UserMenu;
