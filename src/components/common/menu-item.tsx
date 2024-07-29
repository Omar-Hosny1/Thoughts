'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { ReactElement } from 'react';
import React from 'react';

import Button from '../base/button';

interface MenuItemProps {
  isCollapsed: boolean;
  route: string;
  activeIcon: string | ReactElement;
  nonActiveIcon: string | ReactElement;
  menuName: string;
}

function MenuItem({
  isCollapsed,
  route,
  menuName,
  activeIcon,
  nonActiveIcon,
}: MenuItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname.includes(route);

  return (
    <Button
      padding="24px"
      roundedFlatFrom="right"
      withIcon
      w={isCollapsed ? '80px' : 'unset'}
      hideChildren={isCollapsed}
      icon={isActive ? activeIcon : nonActiveIcon}
      iconPosition="left"
      onClick={() => {
        router.push(route);
      }}
      justifyContent="start"
      iconSize={28}
      rounded="15px"
      gap={3}
      styleText={{
        fontSize: '17px',
      }}
    >
      {menuName}
    </Button>
  );
}

export default MenuItem;
