import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { MdOutlinePending, MdPending } from 'react-icons/md';
import { PiPaperPlaneBold } from 'react-icons/pi';
import { RiNotification3Line } from 'react-icons/ri';

import { useCurrentUser } from '@/utils/hooks/use-current-user';

import Button from '../base/button';
import MenuItem from './menu-item';

function MenusWrapper({ isCollapsed }: { isCollapsed: boolean }) {
  const router = useRouter();
  const user = useCurrentUser();
  const isAdmin = user?.userRole === 'admin';
  return (
    <>
      <Flex flexDir="column" gap="10px">
        <MenuItem
          isCollapsed={isCollapsed}
          route="/home"
          menuName="Your Home"
          activeIcon={<GoHomeFill size="35px" />}
          nonActiveIcon={<GoHome size="35px" />}
        />
        <Button
          padding="24px"
          roundedFlatFrom="right"
          withIcon
          w={isCollapsed ? '80px' : 'unset'}
          hideChildren={isCollapsed}
          icon={<RiNotification3Line size="35px" />}
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
        {isAdmin ? (
          <MenuItem
            isCollapsed={isCollapsed}
            route="/pending-thoughts"
            menuName="Pending Blogs"
            activeIcon={<MdPending size="35px" />}
            nonActiveIcon={<MdOutlinePending size="35px" />}
          />
        ) : null}
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
          icon={<FiActivity size="30px" />}
          iconPosition="left"
          justifyContent="start"
          iconSize={28}
        >
          Your Activity
        </Button>
        {isAdmin ? (
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
        ) : null}
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
          onClick={() => {
            router.push('/add-thought');
          }}
          rounded="15px"
          icon={<PiPaperPlaneBold size="30px" />}
          iconPosition="left"
          justifyContent="start"
          styleVariants="base"
          iconSize={28}
          color="primary"
        >
          Write a Thought
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
          onClick={() => {
            signOut();
          }}
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
