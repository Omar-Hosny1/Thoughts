import type { ButtonProps } from '@chakra-ui/react';
import { Button as BaseButton } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import type { RoundedFlatFrom } from '@/utils/types/RoundedFlatFrom';

type ButtonStyleVariants = 'base' | 'outline' | 'danger' | 'success';

interface Props extends ButtonProps {
  roundedFlatFrom: RoundedFlatFrom;
  styleVariants?: ButtonStyleVariants;
  withIcon?: boolean;
  iconPosition: 'right' | 'left';
  icon: string;
}

function getStyleVariant(style: ButtonStyleVariants) {
  switch (style) {
    case 'base':
      return {
        color: 'primary',
        bgColor: 'secondary',
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

    default:
      return {
        color: 'secondary',
        borderWidth: '1px',
        borderColor: 'secondary',
        bgColor: 'primary',
      };
  }
}

function Button({
  styleVariants = 'outline',
  roundedFlatFrom,
  children,
  icon,
  iconPosition,
  withIcon = true,
  ...props
}: Props) {
  const handleIconLogic = () => {
    if (!withIcon) {
      return {};
    }
    if (iconPosition === 'left') {
      return {
        leftIcon: <Image src={icon} alt="" width={15} height={15} />,
      };
    }
    return {
      rightIcon: <Image src={icon} alt="" width={15} height={15} />,
    };
  };

  return (
    <BaseButton
      {...getStyleVariant(styleVariants)}
      {...handleIconLogic()}
      _hover={{}}
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius
      }
      borderTopLeftRadius={roundedFlatFrom === 'left' ? 0 : props.borderRadius}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export default Button;
