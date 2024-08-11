'use client';

import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import MenusWrapper from './menus-wrapper';

function MenusSection() {
  return (
    <Flex
      transition="all 0.3s"
      display={{ base: 'none', md: 'flex' }}
      h="full"
      pe="10px"
      flexDir="column"
      pos="relative"
      borderEndWidth="1px"
      justifyContent="space-between"
    >
      <MenusWrapper isCollapsed={false} />
      <Box
        transition="all 0.3s"
        width="4px"
        cursor="ew-resize"
        position="absolute"
        right={0}
        top={0}
        bottom={0}
        zIndex={10}
      />
    </Flex>
  );
}

export default MenusSection;
