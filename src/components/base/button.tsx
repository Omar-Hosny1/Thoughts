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
  icon?: string | React.ReactElement;
  iconSize?: number;
  styleText?: GLobalTextProps;
  hideChildren?: boolean;
}

function getStyleVariant(style: ButtonStyleVariants) {
  switch (style) {
    case 'base':
      return {
        _hover: {
          bgColor: '#C9C9C9',
        },
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
        _hover: {
          bgColor: 'black',
        },
        color: 'secondary',
        borderWidth: '1px',
        borderColor: 'secondary',
        bgColor: 'primary',
      };
    case 'none':
      return {
        bgColor: 'transparent',
        _hover: {
          bgColor: 'transparent',
        },
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
  hideChildren = false,
  ...props
}: Props) {
  const handleIconLogic = () => {
    if (!withIcon) {
      return {};
    }
    if (iconPosition === 'left') {
      return {
        leftIcon:
          typeof icon === 'string' ? (
            <Image src={icon} alt="" width={iconSize} height={iconSize} />
          ) : (
            icon
          ),
      };
    }
    return {
      rightIcon:
        typeof icon === 'string' ? (
          <Image src={icon} alt="" width={iconSize} height={iconSize} />
        ) : (
          icon
        ),
    };
  };

  return (
    <BaseButton
      margin="0 !important"
      _active={{ backgroundColor: 'transparent' }}
      {...getStyleVariant(styleVariants)}
      {...handleIconLogic()}
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius || props.rounded
      }
      borderTopLeftRadius={
        roundedFlatFrom === 'left' ? 0 : props.borderRadius || props.rounded
      }
      rounded="lg"
      overflow="hidden"
      {...props}
    >
      <Text
        color={styleVariants === 'base' ? 'primary' : styleText?.color}
        {...styleText}
      >
        {!hideChildren ? children : null}
      </Text>
    </BaseButton>
  );
}

export default Button;
