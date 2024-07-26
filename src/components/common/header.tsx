import { Flex, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '../base/button';
import Modal from '../base/modal';
import Thought from './logo';
import MenusWrapper from './menus_wrapper';
import UserMenu from './user-menu';

function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/add-thought');
  };
  return (
    <Flex alignItems="center" justifyContent="space-between" h="full">
      <Modal
        title="Menus"
        size="md"
        scrollBehavior="outside"
        onClose={onClose}
        isOpen={isOpen}
      >
        <MenusWrapper isCollapsed={false} />
      </Modal>
      <Button
        display={{ base: 'flex', md: 'none' }}
        roundedFlatFrom="right"
        iconPosition="left"
        withIcon
        iconSize={30}
        styleVariants="none"
        icon="/icons/menu.svg"
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
        onClick={handleNavigate}
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
