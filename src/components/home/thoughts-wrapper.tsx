import { Box } from '@chakra-ui/react';
import React from 'react';

import type IThought from '@/utils/interfaces/thought';

import Thought from '../common/thought';

function ThoughtsWrapper({ thoughts }: { thoughts: IThought[] }) {
  return (
    <Box overflowY="scroll" w="100%">
      {thoughts.map((e) => (
        <Thought thought={e} key={e.id} />
      ))}
    </Box>
  );
}

export default ThoughtsWrapper;
