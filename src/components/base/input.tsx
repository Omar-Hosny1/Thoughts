import type { InputProps } from '@chakra-ui/react';
import { Input as BaseInput } from '@chakra-ui/react';
import React from 'react';

import type { RoundedFlatFrom } from '@/utils/types/RoundedFlatFrom';

type InputStyleVariants = 'outline';

interface Props extends InputProps {
  roundedFlatFrom: RoundedFlatFrom;
  label: string;
  isPassword?: boolean;
  styleVariants?: InputStyleVariants;
}

function Input({
  roundedFlatFrom,
  label,
  isPassword,
  styleVariants = 'outline',
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

  return (
    <BaseInput
      {...getStyleVariant()}
      placeholder={label}
      w="fit-content"
      type={isPassword ? 'password' : undefined}
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius
      }
      borderTopLeftRadius={roundedFlatFrom === 'left' ? 0 : props.borderRadius}
    />
  );
}

export default Input;
