import { Flex } from '@chakra-ui/react';
import React from 'react';

import Input from '../base/input';
import Paper from '../base/paper';

function SearchSection() {
  return (
    <Flex flexDir="column" h="100%">
      <Input
        w="full"
        ps="40px"
        py="25px"
        roundedFlatFrom="left"
        withIcon
        label="Search"
        iconSrc="/icons/search.svg"
      />
      <Flex mt="10px" w="full" gap="10px" flexGrow={1} flexDir="column">
        <Paper flex="4" roundedFlatFrom="left" bg="secondary" />
        <Paper flex="3" roundedFlatFrom="left" bg="secondary" />
      </Flex>
    </Flex>
  );
}

export default SearchSection;
