import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import Button from '../base/button';
import Text from '../common/text';

function MenusSection() {
  const initialWidth: number = 120;
  const maxWidth: number = 550;
  const [width, setWidth] = useState(initialWidth);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isResizing, setIsResizing] = useState(false);

  const handleResize = (e: MouseEvent) => {
    const newWidth = e.clientX;

    setWidth(newWidth > maxWidth ? maxWidth : newWidth);
    if (newWidth < 200) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  const stopResizing = () => {
    setIsResizing(false);
    document.body.style.userSelect = ''; // Re-enable text selection
    window.removeEventListener('mousemove', handleResize);
    window.removeEventListener('mouseup', stopResizing);
  };

  const startResizing = () => {
    setIsResizing(true);
    document.body.style.userSelect = 'none'; // Disable text selection
    window.addEventListener('mousemove', handleResize);
    window.addEventListener('mouseup', stopResizing);
  };

  return (
    <Flex
      transition="all 0.3s"
      display={{ base: 'none', md: 'flex' }}
      pe="10px"
      h="full"
      flexDir="column"
      pos="relative"
      borderEndColor="secondary"
      borderEndWidth="1px"
      justifyContent="space-between"
      width={isCollapsed ? `${initialWidth}px` : `${width}px`}
    >
      <Flex flexDir="column" gap="10px">
        <Text
          display={isCollapsed ? 'none' : 'initial'}
          lineHeight={1}
          fontSize="3xl"
          mb="10px"
        >
          Menus
        </Text>
        <Button
          padding="24px"
          roundedFlatFrom="right"
          withIcon
          hideChildren={isCollapsed}
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
        {/* <Button
          padding="24px"
          roundedFlatFrom="right"
          withIcon
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
          Most Used Tags
        </Button> */}
        <Button
          padding="24px"
          roundedFlatFrom="right"
          withIcon
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
      <Flex flexDir="column" gap="10px">
        <Button
          padding="24px"
          roundedFlatFrom="right"
          withIcon
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
      <Box
        onDoubleClick={() => setIsCollapsed(true)}
        transition="all 0.3s"
        onMouseDown={startResizing}
        width="4px"
        backgroundColor={isResizing ? 'secondary' : 'none'}
        _hover={{
          backgroundColor: 'secondary',
        }}
        cursor="ew-resize"
        position="absolute"
        right={0}
        top={0}
        bottom={0}
        zIndex={10}
      />
    </Flex>
  );
}

export default MenusSection;
