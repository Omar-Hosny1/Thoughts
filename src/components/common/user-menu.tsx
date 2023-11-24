import { Avatar, Box, Flex, Tooltip } from '@chakra-ui/react';
import React from 'react';

import Text from './text';

function UserMenu() {
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
          Omar Hosny
        </Text>
        <Text fontSize="12px" color="gray.300" lineHeight="1.3">
          Admin
        </Text>
      </Box>
      <Tooltip label="Ryan Florence" placement="right">
        <Avatar
          bg="secondary"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
      </Tooltip>
    </Flex>
  );
}

export default UserMenu;
