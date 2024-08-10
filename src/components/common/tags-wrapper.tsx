import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import type { FieldArrayRenderProps } from 'formik';
import React from 'react';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

interface Props {
  tags: string[];
  formik?: FieldArrayRenderProps;
  isEditingMode?: boolean;
}

function TagsWrapper({ tags, formik, isEditingMode = true }: Props) {
  const { primaryColor, secondaryColor } = useThemeColor();

  return (
    <Flex gap={4}>
      {tags.map((tag, index) => (
        <Tag
          bg={secondaryColor}
          key={tag}
          onClick={() => {
            formik?.remove(index);
          }}
          borderRadius="full"
          variant="solid"
          colorScheme="blue"
        >
          <TagLabel color={primaryColor}>{tag}</TagLabel>
          {isEditingMode ? <TagCloseButton color={primaryColor} /> : null}
        </Tag>
      ))}
    </Flex>
  );
}

export default TagsWrapper;
