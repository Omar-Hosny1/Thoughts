'use client';

import { Box } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactElement } from 'react';
import React from 'react';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

import Paper from '../base/paper';
import Text from './text';

interface MenuItemProps {
  // isCollapsed: boolean;
  route: string;
  activeIcon: string | ReactElement;
  nonActiveIcon: string | ReactElement;
  menuName: string;
  badgeCount?: number;
}

function MenuItem({
  // eslint-disable-next-line unused-imports/no-unused-vars
  // isCollapsed,
  route,
  menuName,
  activeIcon,
  nonActiveIcon,
  badgeCount,
}: MenuItemProps) {
  const { secondaryColor, primaryColor } = useThemeColor();
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname.includes(route);
  return (
    <Paper
      overflow="hidden"
      justifyContent="space-between"
      roundedFlatFrom="right"
      borderWidth="1px"
      borderColor={secondaryColor}
      onClick={() => {
        router.push(route);
      }}
      display="flex"
      alignItems="center"
      paddingY="10px"
      px="20px"
      borderRadius="15px"
    >
      <Box display="flex" alignItems="center">
        {isActive ? activeIcon : nonActiveIcon}
        <Box w="20px" />
        <Text>{menuName}</Text>
      </Box>
      {badgeCount ? (
        <Box
          paddingY="5px"
          paddingX="10px"
          borderRadius="10px"
          bgColor={secondaryColor}
        >
          <Text color={primaryColor}>{badgeCount}</Text>
        </Box>
      ) : null}
    </Paper>
  );
}

export default MenuItem;
