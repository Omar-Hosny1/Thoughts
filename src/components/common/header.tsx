import { Flex } from '@chakra-ui/react';
import React from 'react';

import Button from '../base/button';
import Thought from './logo';

function Header() {
  return (
    <Flex alignItems="center" justifyContent="space-between" h="full">
      <Button
        roundedFlatFrom="right"
        iconPosition="left"
        withIcon
        icon="/icons/edit.svg"
        paddingY="22px"
      >
        Write a Thought
      </Button>
      <Thought />
      <Button
        roundedFlatFrom="left"
        iconPosition="right"
        withIcon
        icon="/icons/edit.svg"
        paddingY="22px"
      >
        Write a Thought
      </Button>
    </Flex>
  );
}

export default Header;
