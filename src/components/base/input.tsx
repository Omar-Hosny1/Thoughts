import type { InputProps } from '@chakra-ui/react';
import {
  Input as BaseInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';

import type { RoundedFlatFrom } from '@/utils/types/RoundedFlatFrom';

type InputStyleVariants = 'outline';

interface CoreInputProps extends InputProps {
  roundedFlatFrom: RoundedFlatFrom;
  styleVariants?: InputStyleVariants;
}

function CoreInput({
  roundedFlatFrom,
  styleVariants = 'outline',
  ...props
}: CoreInputProps) {
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
      w="fit-content"
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius
      }
      borderTopLeftRadius={roundedFlatFrom === 'left' ? 0 : props.borderRadius}
      {...props}
    />
  );
}

interface Props extends CoreInputProps {
  withIcon?: boolean;
  iconPositon?: 'left' | 'right';
  iconSrc?: string;
}

function Input({ withIcon, iconPositon, iconSrc = '', ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  if (withIcon) {
    return (
      <InputGroup>
        {iconPositon === 'right' ? (
          <InputRightElement pointerEvents="none">
            <Image alt="" src={iconSrc} width={20} height={20} />
          </InputRightElement>
        ) : (
          <InputLeftElement
            pointerEvents="none"
            justifyContent="center"
            alignItems="center"
          >
            <Image alt="" src={iconSrc} width={20} height={20} />
          </InputLeftElement>
        )}
        <CoreInput {...props} />
      </InputGroup>
    );
  }
  if (props.type === 'password') {
    return (
      <InputGroup>
        <InputRightElement cursor="pointer">
          <Image
            onClick={() => setShowPassword((prev) => !prev)}
            alt=""
            src={
              showPassword
                ? '/icons/show-password.svg'
                : '/icons/hide-password.svg'
            }
            width={20}
            height={20}
          />
        </InputRightElement>
        <CoreInput {...props} type={showPassword ? 'text' : 'password'} />
      </InputGroup>
    );
  }

  return <CoreInput {...props} />;
}

export default Input;
