import type { FlexProps } from '@chakra-ui/react';
import {
  Avatar,
  Badge,
  Box,
  ButtonGroup,
  Flex,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import type { Thought as ThoughtType } from '@/utils/interfaces/thought';

import Button from '../base/button';
import Modal from '../base/modal';
import TagsWrapper from './tags-wrapper';
import Text from './text';

interface Props {
  thoughtStyling?: FlexProps | null;
  thought: ThoughtType;
}

function Thought({ thought, thoughtStyling }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      gap="15px"
      transition="0.3s"
      p="15px"
      cursor="pointer"
      borderBottomColor="secondary"
      borderBottomWidth="1px"
      w="100%"
      _hover={{ bg: 'black' }}
      {...thoughtStyling}
    >
      <Box display={{ base: 'none', md: 'initial' }}>
        <Tooltip label="Ryan Florence" placement="right">
          <Avatar
            bg="secondary"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
        </Tooltip>
      </Box>
      <Box w="100%">
        <Flex gap="10px">
          <Box display={{ base: 'initial', md: 'none' }}>
            <Tooltip label="Ryan Florence" placement="right">
              <Avatar
                bg="secondary"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
            </Tooltip>
          </Box>
          <Box>
            <Text fontSize="lg" lineHeight="1">
              Omar Hosny
            </Text>
            <Text fontSize="12px" color="gray.300" lineHeight="1.3">
              {/* 10/24/2023 */}
              {thought.publishedDate.toDateString()}
            </Text>
          </Box>
          <Badge ml="1" h="fit-content" colorScheme="green">
            New
          </Badge>
        </Flex>
        <Text fontSize="md" color="#C8C8C8" mt="10px" lineHeight={1.3}>
          {/* What you do makes a difference, and you have to decide what kind of
          difference you want to make. What you do makes a difference, and you
          have to decide what kind of difference you want to make........ */}
          {thought.thoughtTitle}
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: thought.thoughtBody }} />
        {/* <Image
          src="/icons/edit.svg"
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
        <Box my="10px" />
        <TagsWrapper tags={thought.tags} isEditingMode={false} />
        {/* <Stack direction="row" my="10px">
          <Badge>Default</Badge>
          <Badge colorScheme="green">Programming</Badge>
          <Badge colorScheme="red">Flutter</Badge>
          <Badge colorScheme="purple">New</Badge>
        </Stack> */}
        {thought.isAdmin ? (
          <>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size="xl"
              title="Are You Sure That You Want To Approve This?"
            >
              <ButtonGroup
                height="100px"
                gap="10px"
                mt="3"
                display="flex"
                flexDirection="column"
              >
                <Button
                  withIcon
                  icon="icons/approve.svg"
                  styleVariants="base"
                  iconPosition="left"
                  flex={1}
                  fontSize="lg"
                >
                  Approve Thought
                </Button>
                <Button
                  withIcon
                  icon="icons/reject.svg"
                  styleVariants="outline"
                  iconPosition="left"
                  flex={1}
                  onClick={onClose}
                  fontSize="lg"
                >
                  Cancel Thought
                </Button>
              </ButtonGroup>
            </Modal>
            <ButtonGroup
              gap="10px"
              w="100%"
              mt="3"
              display="flex"
              flexDir={{ base: 'column', md: 'row' }}
            >
              <Button
                withIcon
                icon="icons/approve.svg"
                styleVariants="base"
                iconPosition="left"
                flex={1}
                p="10px"
                fontSize="lg"
                roundedFlatFrom="left"
                onClick={onOpen}
              >
                Approve Thought
              </Button>
              <Button
                withIcon
                flex={1}
                p="10px"
                icon="icons/reject.svg"
                styleVariants="outline"
                fontSize="lg"
                roundedFlatFrom="left"
                iconPosition="left"
              >
                Reject Thought
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <ButtonGroup
            gap={{ base: '10px', md: '20px' }}
            mt="3"
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Button
              withIcon
              iconPosition="left"
              icon="/icons/views.svg"
              p={0}
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
