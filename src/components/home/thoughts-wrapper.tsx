import { Box } from '@chakra-ui/react';
import React from 'react';

import Thought from '../common/thought';

function ThoughtsWrapper() {
  return (
    <Box overflowY="scroll">
      <Thought isAdmin />
      <Thought isAdmin={false} />
      <Thought isAdmin />
      <Thought isAdmin={false} />
      <Thought isAdmin />
      <Thought isAdmin={false} />
      {/* <Thought />
      <Thought />
      <Thought />
      <Thought />
      <Thought />
      <Thought />
      <Thought /> */}
    </Box>
  );
}

export default ThoughtsWrapper;
