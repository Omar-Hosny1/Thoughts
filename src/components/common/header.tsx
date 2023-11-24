import { Flex } from '@chakra-ui/react';
import React from 'react';

import Button from '../base/button';
import Thought from './logo';
import UserMenu from './user-menu';

function Header() {
  return (
    <Flex alignItems="center" justifyContent="space-between" h="full">
      <Button
        roundedFlatFrom="right"
        iconPosition="left"
        withIcon
        icon="/icons/edit.svg"
        paddingY="22px"
        styleText={{
          display: { base: 'none', md: 'initial' },
        }}
      >
        Write a Thought
      </Button>
      <Thought />
      <UserMenu />
    </Flex>
  );
}

export default Header;
