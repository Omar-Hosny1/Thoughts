import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';

function ThoughtSkeleton() {
  return (
    <Box padding="6" boxShadow="lg" bg="primary" m="10px">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={5} spacing="4" skeletonHeight="2" />
    </Box>
  );
}

export default ThoughtSkeleton;
