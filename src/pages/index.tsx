import { Flex } from '@chakra-ui/react';

import Button from '@/components/base/button';
import Input from '@/components/base/input';

const Index = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Button
        iconPosition="left"
        roundedFlatFrom="right"
        icon="/edit.svg"
        margin="10px"
        styleVariants="outline"
      >
        Write Thought
      </Button>
      <Button
        iconPosition="left"
        roundedFlatFrom="right"
        icon="/edit.svg"
        margin="10px"
        styleVariants="danger"
      >
        Write Thought
      </Button>
      <Button
        iconPosition="left"
        roundedFlatFrom="right"
        icon="/edit.svg"
        margin="10px"
        styleVariants="success"
      >
        Write Thought
      </Button>
      <Button
        iconPosition="left"
        roundedFlatFrom="right"
        icon="/edit.png"
        margin="10px"
        styleVariants="base"
      >
        Write Thought
      </Button>
      <Button
        iconPosition="left"
        roundedFlatFrom="right"
        icon="/edit.png"
        margin="10px"
        withIcon={false}
        styleVariants="base"
        px="70px"
      >
        User
      </Button>
      <Input label="Name" roundedFlatFrom="right" />
      <Input label="Password" roundedFlatFrom="right" isPassword />
    </Flex>
  );
};

export default Index;
