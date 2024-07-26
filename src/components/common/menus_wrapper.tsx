import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '../base/button';

function MenusWrapper({ isCollapsed }: { isCollapsed: boolean }) {
  const router = useRouter();

  return (
    <>
      <Flex flexDir="column" gap="10px">
        <Button
          padding="24px"
          roundedFlatFrom="right"
          withIcon
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
          icon="/icons/home.svg"
          iconPosition="left"
          onClick={() => {
            router.back();
          }}
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
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
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
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
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
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
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
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
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
          display="flex"
          roundedFlatFrom="right"
          withIcon
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
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
      </Flex>
      <Box h="10px" />
      <Flex flexDir="column" gap="10px">
        <Button
          padding="24px"
          roundedFlatFrom="right"
          withIcon
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
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
          roundedFlatFrom="right"
          withIcon
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
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
    </>
  );
}

export default MenusWrapper;
