import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

import Input from '../base/input';
import Paper from '../base/paper';

function SearchSection() {
  const { secondaryColor } = useThemeColor();

  return (
    <Flex
      borderStartColor={secondaryColor}
      borderStartWidth="1px"
      borderColor={secondaryColor}
      flexDir="column"
      h="100%"
      ps="10px"
    >
      <Input
        w="full"
        ps="40px"
        roundedFlatFrom="left"
        placeholder="Search"
        withIcon
        iconSrc="/icons/search.svg"
      />
      <Flex mt="10px" w="full" gap="10px" flexGrow={1} flexDir="column">
        <Paper flex="6" roundedFlatFrom="left" bg={secondaryColor} />
        <Divider />
        <Paper flex="3" roundedFlatFrom="left" bg={secondaryColor} />
      </Flex>
    </Flex>
  );
}

export default SearchSection;
