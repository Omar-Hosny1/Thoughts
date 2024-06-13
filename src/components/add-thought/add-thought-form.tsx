import {
  Badge,
  Box,
  ButtonGroup,
  Editable,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

import Button from '../base/button';
import Input from '../base/input';
import Modal from '../base/modal';
import Text from '../common/text';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

function AddThoughtForm() {
  const [content, setContent] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'immerse your self...',
      style: {
        backgroundColor: '#1D1D1D',
        color: 'white',
      },
    }),
    [],
  );
  return (
    <Box w="100%" paddingStart="10px">
      <Text mb="5px" fontSize="24px" color="secondary">
        Thought Title
      </Text>
      <Input
        type="email"
        w="100%"
        color="secondary"
        roundedFlatFrom="none"
        placeholder="Share Your Thoughts Now"
        _placeholder={{
          color: 'grey',
          fontSize: '13px',
        }}
        mb="20px"
        label=""
      />

      <Text mb="5px" fontSize="24px" color="secondary">
        Thought Body
      </Text>
      <JoditEditor
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />

      <Modal
        title="Choose Tags"
        size="md"
        scrollBehavior="outside"
        onClose={onClose}
        isOpen={isOpen}
      >
        <ButtonGroup
          height="100px"
          gap="10px"
          mt="3"
          display="flex"
          flexDirection="column"
        >
          <Editable />
          <Button
            styleVariants="base"
            iconPosition="left"
            flex={1}
            fontSize="lg"
          >
            Submit
          </Button>
          <Button
            m="0 !important"
            styleVariants="outline"
            iconPosition="left"
            flex={1}
            onClick={onClose}
            fontSize="lg"
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Modal>
      <Stack direction="row" mt="10px">
        <Badge>Default</Badge>
        <Badge colorScheme="green">Programming</Badge>
        <Badge colorScheme="red">Flutter</Badge>
        <Badge colorScheme="purple">New</Badge>
      </Stack>
      <Button
        onClick={onOpen}
        w="100%"
        padding="24px"
        roundedFlatFrom="left"
        withIcon
        gap={3}
        styleText={{
          fontSize: '17px',
        }}
        rounded="15px"
        icon="/icons/tags.svg"
        iconPosition="left"
        justifyContent="center"
        mt="10px !important"
        iconSize={28}
      >
        Choose Tags
      </Button>
      <Button
        w="100%"
        padding="24px"
        styleVariants="base"
        roundedFlatFrom="left"
        withIcon
        gap={3}
        styleText={{
          fontSize: '17px',
        }}
        rounded="15px"
        icon="/icons/publish.svg"
        iconPosition="left"
        justifyContent="center"
        mt="10px !important"
        iconSize={28}
      >
        Publish Thought
      </Button>
    </Box>
  );
}
export default AddThoughtForm;
