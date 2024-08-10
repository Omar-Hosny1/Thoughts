'use client';

import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

import MenusWrapper from './menus-wrapper';

function MenusSection() {
  const initialWidth: number = 400;
  const maxWidth: number = 400;

  const [width, setWidth] = useState(initialWidth);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const { secondaryColor } = useThemeColor();

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
      h="full"
      pe="10px"
      flexDir="column"
      pos="relative"
      borderEndColor={secondaryColor}
      borderEndWidth="1px"
      justifyContent="space-between"
      width={isCollapsed ? `${initialWidth}px` : `${width}px`}
    >
      <MenusWrapper isCollapsed={isCollapsed} />
      <Box
        onDoubleClick={() => setIsCollapsed(true)}
        transition="all 0.3s"
        onMouseDown={startResizing}
        width="4px"
        backgroundColor={isResizing ? secondaryColor : 'none'}
        _hover={{
          backgroundColor: secondaryColor,
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
