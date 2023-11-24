import { Center, Divider, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import Button from '../base/button';

function FilterationButtons() {
  const [isDiscoverSelected, setIsDiscoverSelected] = useState<boolean>();

  function onDiscoverSelected() {
    setIsDiscoverSelected(true);
  }

  function onFollowingSelected() {
    setIsDiscoverSelected(false);
  }

  return (
    <HStack px="10px" w="full">
      <Button
        flex={1}
        py="25px"
        styleText={{
          fontSize: 'lg',
        }}
        styleVariants={isDiscoverSelected ? 'base' : 'outline'}
        onClick={() => onDiscoverSelected()}
      >
        Discover
      </Button>
      <Center>
        <Divider orientation="vertical" height="35px" />
      </Center>
      <Button
        flex={1}
        styleText={{
          fontSize: 'lg',
        }}
        py="25px"
        onClick={() => onFollowingSelected()}
        styleVariants={isDiscoverSelected ? 'outline' : 'base'}
      >
        Following
      </Button>
    </HStack>
  );
}

export default FilterationButtons;
