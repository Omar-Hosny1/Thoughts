import type { ButtonProps } from '@chakra-ui/react';
import { Button as BaseButton } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import type { RoundedFlatFrom } from '@/utils/types/RoundedFlatFrom';

import type { GLobalTextProps } from '../common/text';
import Text from '../common/text';

type ButtonStyleVariants = 'base' | 'outline' | 'danger' | 'success' | 'none';

interface Props extends ButtonProps {
  roundedFlatFrom?: RoundedFlatFrom;
  styleVariants?: ButtonStyleVariants;
  withIcon?: boolean;
  iconPosition?: 'right' | 'left';
  icon?: string;
  iconSize?: number;
  styleText?: GLobalTextProps;
}

function getStyleVariant(style: ButtonStyleVariants) {
  switch (style) {
    case 'base':
      return {
        color: 'primary',
        bgColor: 'secondary',
        borderWidth: '1px',
        borderColor: 'secondary',
      };
    case 'danger':
      return {
        color: 'white',
        bgColor: 'danger',
      };
    case 'success':
      return {
        color: 'white',
        bgColor: 'success',
      };
    case 'outline':
      return {
        color: 'secondary',
        borderWidth: '1px',
        borderColor: 'secondary',
        bgColor: 'primary',
      };

    default:
      return {};
  }
}

function Button({
  styleVariants = 'outline',
  roundedFlatFrom = 'none',
  children,
  icon = '',
  iconPosition,
  withIcon,
  iconSize = 20,
  styleText,
  ...props
}: Props) {
  const handleIconLogic = () => {
    if (!withIcon) {
      return {};
    }
    if (iconPosition === 'left') {
      return {
        leftIcon: (
          <Image src={icon} alt="" width={iconSize} height={iconSize} />
        ),
      };
    }
    return {
      rightIcon: <Image src={icon} alt="" width={iconSize} height={iconSize} />,
    };
  };

  return (
    <BaseButton
      {...getStyleVariant(styleVariants)}
      {...handleIconLogic()}
      _hover={{}}
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius || props.rounded
      }
      borderTopLeftRadius={
        roundedFlatFrom === 'left' ? 0 : props.borderRadius || props.rounded
      }
      rounded="lg"
      {...props}
    >
      <Text
        color={styleVariants === 'base' ? 'primary' : styleText?.color}
        {...styleText}
      >
        {children}
      </Text>
    </BaseButton>
  );
}

export default Button;
