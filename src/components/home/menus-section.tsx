import { Flex } from '@chakra-ui/react';
import React from 'react';

import Button from '../base/button';
import Text from '../common/text';

function MenusSection() {
  return (
    <Flex pe="10px" h="full" flexDir="column" justifyContent="space-between">
      <Flex flexDir="column" gap="10px">
        <Text lineHeight={1} fontSize="3xl" mb="10px">
          Your Heads up!
        </Text>
        <Button
          paddingY="24px"
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
          paddingY="24px"
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
          paddingY="24px"
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
          paddingY="24px"
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
        {/* <Button
          paddingY="24px"
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
          Most Used Tags
        </Button> */}
        <Button
          paddingY="24px"
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
          paddingY="24px"
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
      </Flex>
      <Flex flexDir="column" gap="10px">
        <Button
          paddingY="24px"
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
          paddingY="24px"
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
    </Flex>
  );
}

export default MenusSection;
