import {
  Avatar,
  Badge,
  Box,
  ButtonGroup,
  Flex,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';

import Button from '../base/button';
import Text from './text';

interface Props {
  isAdmin: boolean;
}

function Thought({ isAdmin }: Props) {
  return (
    <Flex
      gap="15px"
      transition="0.3s"
      p="15px"
      cursor="pointer"
      borderBottomColor="secondary"
      borderBottomWidth="1px"
      _hover={{ bg: 'black' }}
    >
      <Tooltip label="Ryan Florence" placement="right">
        <Avatar
          bg="secondary"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
      </Tooltip>
      <Box>
        <Flex gap="10px">
          <Box>
            <Text fontSize="lg" lineHeight="1">
              Omar Hosny
            </Text>
            <Text fontSize="12px" color="gray.300" lineHeight="1.3">
              10/24/2023
            </Text>
          </Box>
          <Badge ml="1" h="fit-content" colorScheme="green">
            New
          </Badge>
        </Flex>
        <Text fontSize="md" color="#C8C8C8" mt="10px" lineHeight={1.3}>
          What you do makes a difference, and you have to decide what kind of
          difference you want to make. What you do makes a difference, and you
          have to decide what kind of difference you want to make........
        </Text>
        {/* <Image
          src="/icons/islam.jpeg"
          alt=""
          width={500}
          height={500}
          style={{
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
          sizes="(max-width: 768px) 100vw, 33vw"
        /> */}
        <Stack direction="row" my="10px">
          <Badge>Default</Badge>
          <Badge colorScheme="green">Programming</Badge>
          <Badge colorScheme="red">Flutter</Badge>
          <Badge colorScheme="purple">New</Badge>
        </Stack>
        {isAdmin ? (
          <ButtonGroup gap="10px" mt="3" display="flex">
            <Button
              withIcon
              icon="icons/approve.svg"
              styleVariants="success"
              iconPosition="left"
              flex={1}
              fontSize="lg"
              roundedFlatFrom="left"
            >
              Approve Thought
            </Button>
            <Button
              withIcon
              flex={1}
              icon="icons/reject.svg"
              styleVariants="danger"
              fontSize="lg"
              roundedFlatFrom="left"
              iconPosition="left"
            >
              Reject Thought
            </Button>
          </ButtonGroup>
        ) : (
          <ButtonGroup gap="20px" mt="3">
            <Button
              withIcon
              iconPosition="left"
              icon="/icons/views.svg"
              p={0}
              bg={{}}
              styleText={{
                color: 'secondary',
              }}
              styleVariants="none"
            >
              80,000 Looks
            </Button>
            <Button
              withIcon
              iconPosition="left"
              icon="/icons/repost.svg"
              p={0}
              bg={{}}
              styleText={{
                color: 'secondary',
              }}
              styleVariants="none"
            >
              56,570 Repost
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </Flex>
  );
}

export default Thought;
