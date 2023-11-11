import { Flex } from '@chakra-ui/react';
import React from 'react';

import Button from '../base/button';
import Text from '../common/text';

function MenusSection() {
  return (
    <Flex pe="15px" h="full" flexDir="column" justifyContent="space-between">
      <Flex flexDir="column" gap="10px">
        <Text lineHeight={1} fontSize="3xl" mb="10px">
          Your Heads up!
        </Text>
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          icon="/icons/home.png"
          iconPosition="left"
          justifyContent="start"
          iconSize={24}
          rounded="15px"
          gap={3}
        >
          Your Home
        </Button>
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          icon="/icons/notification.png"
          iconPosition="left"
          justifyContent="start"
          iconSize={24}
          rounded="15px"
          gap={3}
        >
          Notifications
        </Button>
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          gap={3}
          rounded="15px"
          icon="/icons/more.png"
          iconPosition="left"
          justifyContent="start"
          iconSize={24}
        >
          Peinding Blogs
        </Button>
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          gap={3}
          rounded="15px"
          icon="/icons/activity.png"
          iconPosition="left"
          justifyContent="start"
          iconSize={24}
        >
          Your Activity
        </Button>
        {/* <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          gap={3}
          rounded="15px"
          icon="/icons/more.png"
          iconPosition="left"
          justifyContent="start"
          iconSize={24}
        >
          Most Used Tags
        </Button> */}
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          gap={3}
          rounded="15px"
          icon="/icons/user.png"
          iconPosition="left"
          justifyContent="start"
          iconSize={24}
        >
          Users Statistics
        </Button>
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          gap={3}
          rounded="15px"
          icon="/icons/edit.png"
          iconPosition="left"
          justifyContent="start"
          styleVariants="base"
          styleText={{
            color: 'primary',
          }}
          iconSize={24}
          color="primary"
        >
          Write Thought
        </Button>
      </Flex>
      <Flex flexDir="column" gap="10px">
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          gap={3}
          rounded="15px"
          icon="/icons/settings.png"
          iconPosition="left"
          justifyContent="start"
          iconSize={24}
        >
          Settings
        </Button>
        <Button
          paddingY="24px"
          roundedFlatFrom="right"
          withIcon
          gap={3}
          rounded="15px"
          icon="/icons/logout.png"
          iconPosition="left"
          justifyContent="start"
          styleVariants="base"
          styleText={{
            color: 'primary',
          }}
          iconSize={24}
          color="primary"
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}

export default MenusSection;
