import { FormLabel, useColorMode } from '@chakra-ui/react';
import type { IJoditEditorProps } from 'jodit-react';
import JoditEditor from 'jodit-react';
import React, { useMemo } from 'react';

interface ThoughtContentInputProps {
  onBlur: (newValue: any) => void;
  value: string;
}

function ThoughtContentInput({ onBlur, value }: ThoughtContentInputProps) {
  const { colorMode } = useColorMode();
  const config: IJoditEditorProps['config'] = useMemo(
    () => ({
      iframe: false,
      placeholder: 'immerse your self...',
      style: {
        backgroundColor: colorMode === 'dark' ? '#1D1D1D' : ' white',
      },
      removeButtons: ['brush'],
      readonly: false,
      cache: true,
      colors: [],
    }),
    [colorMode],
  );

  return (
    <>
      <FormLabel mb="5px" fontSize="18px" color="secondary">
        Thought Content
      </FormLabel>
      <JoditEditor config={config} onBlur={onBlur} value={value} />
    </>
  );
}

export default ThoughtContentInput;
