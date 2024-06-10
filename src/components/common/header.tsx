import { Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import Button from '../base/button';
import Modal from '../base/modal';
import Thought from './logo';
import UserMenu from './user-menu';

function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex alignItems="center" justifyContent="space-between" h="full">
      <Modal
        title="Menus"
        size="md"
        scrollBehavior="outside"
        // styleConfig={{ maxHeight: '0 !important' }}
        onClose={onClose}
        isOpen={isOpen}
      >
        <Flex flexDir="column" gap="10px">
          <Button
            padding="24px"
            roundedFlatFrom="right"
            withIcon
            icon="/icons/home.svg"
            iconPosition="left"
            justifyContent="start"
            iconSize={28}
            rounded="15px"
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
          >
            Your Home
          </Button>
          <Button
            padding="24px"
            roundedFlatFrom="right"
            withIcon
            icon="/icons/notifications.svg"
            iconPosition="left"
            justifyContent="start"
            iconSize={28}
            rounded="15px"
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
          >
            Notifications
          </Button>
          <Button
            padding="24px"
            roundedFlatFrom="right"
            withIcon
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
            rounded="15px"
            icon="/icons/more.svg"
            iconPosition="left"
            justifyContent="start"
            iconSize={28}
          >
            Peinding Blogs
          </Button>
          <Button
            padding="24px"
            roundedFlatFrom="right"
            withIcon
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
            rounded="15px"
            icon="/icons/activity.svg"
            iconPosition="left"
            justifyContent="start"
            iconSize={28}
          >
            Your Activity
          </Button>
          <Button
            padding="24px"
            roundedFlatFrom="right"
            withIcon
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
            rounded="15px"
            icon="/icons/user.svg"
            iconPosition="left"
            justifyContent="start"
            iconSize={28}
          >
            Users Statistics
          </Button>

          <Button
            padding="24px"
            roundedFlatFrom="right"
            withIcon
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
            rounded="15px"
            icon="/icons/settings.svg"
            iconPosition="left"
            justifyContent="start"
            iconSize={28}
          >
            Settings
          </Button>
          <Button
            padding="24px"
            display="flex"
            roundedFlatFrom="right"
            withIcon
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
            rounded="15px"
            icon="/icons/edit-dark.svg"
            iconPosition="left"
            justifyContent="start"
            styleVariants="base"
            iconSize={28}
            color="primary"
          >
            Write Thought
          </Button>
          <Button
            padding="24px"
            roundedFlatFrom="right"
            withIcon
            gap={3}
            styleText={{
              fontSize: '17px',
            }}
            rounded="15px"
            icon="/icons/logout.svg"
            iconPosition="left"
            justifyContent="start"
            styleVariants="base"
            iconSize={28}
            color="primary"
          >
            Logout
          </Button>
        </Flex>
      </Modal>
      <Button
        display={{ base: 'flex', md: 'none' }}
        roundedFlatFrom="right"
        iconPosition="left"
        withIcon
        iconSize={30}
        styleVariants="none"
        icon="/icons/more.svg"
        onClick={() => {
          onOpen();
        }}
        paddingY="22px"
        styleText={{
          display: { base: 'none', md: 'initial' },
        }}
      >
        .
      </Button>
      <Button
        display={{ base: 'none', md: 'flex' }}
        roundedFlatFrom="right"
        iconPosition="left"
        withIcon
        icon="/icons/edit.svg"
        paddingY="22px"
        styleText={{
          display: { base: 'none', md: 'initial' },
        }}
      >
        Write a Thought
      </Button>
      <Thought />
      <UserMenu />
    </Flex>
  );
}

export default Header;
