import { Avatar, Tooltip } from '@chakra-ui/react';
import React from 'react';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

interface UserAvatarProps {
  tooltipLabel: string;
  userName: string;
  imageSrc?: string | undefined;
}

function UserAvatar({ imageSrc, tooltipLabel, userName }: UserAvatarProps) {
  const { primaryColor, secondaryColor } = useThemeColor();

  return (
    <Tooltip label={tooltipLabel}>
      <Avatar
        bg={secondaryColor}
        color={primaryColor}
        name={userName}
        src={imageSrc}
      />
    </Tooltip>
  );
}

export default UserAvatar;
