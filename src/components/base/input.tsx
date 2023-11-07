import type { InputProps } from '@chakra-ui/react';
import {
  Input as BaseInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import type { RoundedFlatFrom } from '@/utils/types/RoundedFlatFrom';

type InputStyleVariants = 'outline';

interface Props extends InputProps {
  roundedFlatFrom: RoundedFlatFrom;
  label: string;
  styleVariants?: InputStyleVariants;
  withIcon?: boolean;
  iconPositon?: 'left' | 'right';
  iconSrc?: string;
}

function Input({
  roundedFlatFrom,
  label,
  withIcon,
  styleVariants = 'outline',
  iconPositon,
  iconSrc = '',
  ...props
}: Props) {
  function getStyleVariant() {
    switch (styleVariants) {
      case 'outline':
        return {
          borderWidth: '1px',
          borderColor: 'secondary',
          color: 'secondary',
          _placeholder: { color: 'secondary' },
        };
      default:
        return {
          borderWidth: '1px',
          borderColor: 'secondary',
        };
    }
  }

  if (withIcon) {
    return (
      <InputGroup pos="relative">
        {iconPositon === 'right' ? (
          <InputRightElement pointerEvents="none">
            <Image alt="" src={iconSrc} width={15} height={15} />
          </InputRightElement>
        ) : (
          <InputLeftElement pointerEvents="none">
            <Image alt="" src={iconSrc} width={15} height={15} />
          </InputLeftElement>
        )}
        <BaseInput
          {...getStyleVariant()}
          placeholder={label}
          w="fit-content"
          borderTopRightRadius={
            roundedFlatFrom === 'right' ? 0 : props.borderRadius
          }
          borderTopLeftRadius={
            roundedFlatFrom === 'left' ? 0 : props.borderRadius
          }
          {...props}
        />
      </InputGroup>
    );
  }

  return (
    <BaseInput
      {...getStyleVariant()}
      placeholder={label}
      w="fit-content"
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius
      }
      borderTopLeftRadius={roundedFlatFrom === 'left' ? 0 : props.borderRadius}
      {...props}
    />
  );
}

export default Input;
