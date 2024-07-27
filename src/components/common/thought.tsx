import type { FlexProps } from '@chakra-ui/react';
import { Badge, Box, ButtonGroup, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BiDotsVertical } from 'react-icons/bi';

import type IThought from '@/utils/interfaces/thought';
import type { ExtendedaUser } from '@/utils/interfaces/user';

import Button from '../base/button';
import Modal from '../base/modal';
import TagsWrapper from './tags-wrapper';
import Text from './text';
import UserAvatar from './user-avatar';

interface Props {
  thoughtStyling?: FlexProps | null;
  thought: IThought;
  isAdmin: boolean;
  userId: string;
}

function Thought({ thought, thoughtStyling, isAdmin, userId }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex
      gap="15px"
      transition="0.3s"
      p="15px"
      cursor="pointer"
      borderBottomColor="secondary"
      borderBottomWidth="1px"
      pos="relative"
      w="100%"
      {...thoughtStyling}
    >
      {
        // eslint-disable-next-line no-underscore-dangle
        (thought.userId as ExtendedaUser)._id === userId ? (
          <Box
            pos="absolute"
            right="0"
            w="30px"
            h="30px"
            borderRadius="15px"
            className="flex items-center justify-center"
          >
            <BiDotsVertical color="#1D1D1D" size="25px" />
          </Box>
        ) : null
      }

      <Box display={{ base: 'none', md: 'initial' }}>
        <UserAvatar thought={thought} />
      </Box>
      <Box w="100%">
        <Flex gap="10px">
          <Box display={{ base: 'initial', md: 'none' }}>
            <UserAvatar thought={thought} />
          </Box>
          <Box>
            <Text fontSize="lg" lineHeight="1">
              {(thought.userId as ExtendedaUser).name}
            </Text>
            <Text fontSize="12px" color="gray.300" lineHeight="1.3">
              {/* 10/24/2023 */}
              {new Date(thought.publishedDate).toDateString()}
              {/* {thought.publishedDate.toDateString()} */}
            </Text>
          </Box>
          <Badge ml="1" h="fit-content" colorScheme="green">
            New
          </Badge>
        </Flex>
        <Text fontSize="x-large" color="#C8C8C8" mt="10px" lineHeight={1.3}>
          {thought.thoughtTitle}
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: thought.thoughtBody }} />
        <Box my="10px" />
        <TagsWrapper tags={thought.tags} isEditingMode={false} />
        {isAdmin ? (
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
            mt="2"
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
              {thought.looks} Looks
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
              {thought.reposts} Repost
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </Flex>
  );
}

export default Thought;
