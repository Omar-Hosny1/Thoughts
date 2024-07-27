'use client';

import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';

import FilterationButtons from './filteration-buttons';
import ThoughtsWrapper from './thoughts-wrapper';

function ThoughtsSection() {
  return (
    <Flex flexDir="column" h="100%" w="100%">
      <FilterationButtons />
      <Divider mt="10px" />
      <ThoughtsWrapper />
    </Flex>
  );
}

export default ThoughtsSection;
