import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Badge, Box, ButtonGroup, Flex, useDisclosure } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { updateThoughtStatus } from 'actions/thought';
import React, { useState } from 'react';

import { onErrorQueryHandler } from '@/utils/helpers/on-error-query';
import { useShowToast } from '@/utils/hooks/use-show-toast';
import type IThought from '@/utils/interfaces/thought';
import type { ExtendedaUser } from '@/utils/interfaces/user';
import { queryClient } from '@/utils/query-client';
import { useThemeColor } from '@/utils/theme/theme-colors-provider';

import Button from '../base/button';
import Modal from '../base/modal';
import ThoughtMenuList from '../thought-menu-list';
import TagsWrapper from './tags-wrapper';
import Text from './text';
import UserAvatar from './user-avatar';

interface Props {
  thoughtConfig?: FlexProps | null;
  thoughtContentConfig?: BoxProps | null;
  thought: IThought;
  isAdmin: boolean;
  userId: string;
}

function Thought({
  thought,
  thoughtConfig,
  isAdmin,
  userId,
  thoughtContentConfig,
}: Props) {
  const { secondaryColor } = useThemeColor();

  const toast = useShowToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedStatus, setSelectedStatus] = useState<IThought['status']>(
    thought.status,
  );

  const { mutate, isLoading } = useMutation(
    () => updateThoughtStatus(selectedStatus, thought.id),
    {
      onError: (error) => onErrorQueryHandler(error, toast),
      onSuccess() {
        queryClient.invalidateQueries(['thoughts', 'pending']);
        toast(`Thought ${selectedStatus} successfuly!`, 'success');
        onClose();
      },
    },
  );

  return (
    <Flex
      gap="15px"
      transition="0.3s"
      p="15px"
      borderBottomColor={secondaryColor}
      borderBottomWidth="1px"
      pos="relative"
      w="100%"
      {...thoughtConfig}
    >
      {(thought.userId as ExtendedaUser).id === userId ? (
        <ThoughtMenuList id={thought.id} />
      ) : null}

      <Box display={{ base: 'none', md: 'initial' }}>
        <UserAvatar
          tooltipLabel={(thought.userId as ExtendedaUser).name}
          userName={(thought.userId as ExtendedaUser).name}
          imageSrc={(thought.userId as ExtendedaUser).image || undefined}
        />
      </Box>
      <Box w="100%">
        <Flex gap="10px">
          <Box display={{ base: 'initial', md: 'none' }}>
            <UserAvatar
              tooltipLabel={(thought.userId as ExtendedaUser).name}
              userName={(thought.userId as ExtendedaUser).name}
              imageSrc={(thought.userId as ExtendedaUser).image || undefined}
            />
          </Box>
          <Box>
            <Text fontSize="lg" lineHeight="1">
              {(thought.userId as ExtendedaUser).name}
            </Text>
            <Text fontSize="12px" color="gray.300" lineHeight="1.3">
              {new Date(thought.createdDate).toDateString()}
            </Text>
          </Box>
          <Badge
            ml="1"
            h="fit-content"
            colorScheme={
              (thought.userId as ExtendedaUser).userRole === 'admin'
                ? 'blue'
                : 'green'
            }
          >
            {(thought.userId as ExtendedaUser).userRole === 'admin'
              ? 'Admin'
              : 'User'}
          </Badge>
        </Flex>
        <Box
          dangerouslySetInnerHTML={{ __html: thought.thoughtContent }}
          {...thoughtContentConfig}
        />

        <Box my="10px" />
        <TagsWrapper tags={thought.tags} isEditingMode={false} />
        {isAdmin && thought.status !== 'approved' ? (
          <>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size="xl"
              title={`Are You Sure That You Want To ${selectedStatus === 'approved' ? 'Approve' : 'Reject'} This?`}
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
                  styleVariants={
                    selectedStatus === 'approved' ? 'base' : 'danger'
                  }
                  iconPosition="left"
                  flex={1}
                  fontSize="lg"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  onClick={() => {
                    mutate();
                  }}
                >
                  {`${selectedStatus === 'approved' ? 'Approve' : 'Reject'}`}
                  Thought
                </Button>
                <Button
                  withIcon
                  icon="icons/reject.svg"
                  styleVariants="outline"
                  iconPosition="left"
                  flex={1}
                  isDisabled={isLoading}
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
                onClick={() => {
                  setSelectedStatus('approved');
                  onOpen();
                }}
                isLoading={isLoading}
                isDisabled={isLoading}
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
                onClick={() => {
                  setSelectedStatus('rejected');
                  onOpen();
                }}
                iconPosition="left"
                isLoading={isLoading}
                isDisabled={isLoading}
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
                color: secondaryColor,
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
                color: secondaryColor,
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
