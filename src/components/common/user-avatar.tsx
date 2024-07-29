import { Avatar, Tooltip } from '@chakra-ui/react';
import React from 'react';

import type IThought from '@/utils/interfaces/thought';
import type { ExtendedaUser } from '@/utils/interfaces/user';

function UserAvatar({ thought }: { thought: IThought }) {
  return (
    <Tooltip label={(thought.userId as ExtendedaUser).name} placement="bottom">
      <Avatar
        bg="secondary"
        color="primary"
        name={(thought.userId as ExtendedaUser).name}
        src={
          (thought.userId as ExtendedaUser).image
            ? (thought.userId as ExtendedaUser).image!
            : undefined
        }
      />
    </Tooltip>
  );
}

export default UserAvatar;
