import { Box } from '@chakra-ui/react';
import React from 'react';

import Text from '@/components/common/text';

function NotFoundPage() {
  return (
    <Box className="flex h-[90vh] items-center justify-center ">
      <Text color="secondary">Can not Find Your Requested Page 🔍</Text>
    </Box>
  );
}

export default NotFoundPage;
