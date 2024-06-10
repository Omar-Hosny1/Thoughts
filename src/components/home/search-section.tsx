import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';

import Input from '../base/input';
import Paper from '../base/paper';

function SearchSection() {
  return (
    <Flex
      borderStartColor="secondary"
      borderStartWidth="1px"
      borderColor="secondary"
      flexDir="column"
      h="100%"
      ps="10px"
    >
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
        <Paper flex="6" roundedFlatFrom="left" bg="secondary" />
        <Divider />
        <Paper flex="3" roundedFlatFrom="left" bg="secondary" />
      </Flex>
    </Flex>
  );
}

export default SearchSection;
