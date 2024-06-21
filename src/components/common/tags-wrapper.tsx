import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import type { FieldArrayRenderProps } from 'formik';
import React from 'react';

interface Props {
  tags: string[];
  formik?: FieldArrayRenderProps;
  isEditingMode?: boolean;
}

function TagsWrapper({ tags, formik, isEditingMode = true }: Props) {
  return (
    <Flex gap={4}>
      {tags.map((tag, index) => (
        <Tag
          bg="secondary"
          key={tag}
          onClick={() => {
            formik?.remove(index);
          }}
          borderRadius="full"
          variant="solid"
          colorScheme="blue"
        >
          <TagLabel color="primary">{tag}</TagLabel>
          {isEditingMode ? <TagCloseButton color="primary" /> : null}
        </Tag>
      ))}
    </Flex>
  );
}

export default TagsWrapper;
