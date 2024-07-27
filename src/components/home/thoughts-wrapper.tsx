import { Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getThoughts } from 'actions/thought';
import { useSession } from 'next-auth/react';
import React from 'react';

import Thought from '../common/thought';
import ThoughtSkeleton from '../skeletons/thought-skeleton';

function ThoughtsWrapper() {
  const session = useSession();
  const isAdmin = session.data?.user.userRole === 'admin';

  const {
    data: thoughts,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryFn: getThoughts,
    queryKey: ['thoughts'],
  });
  // eslint-disable-next-line react/no-unstable-nested-components
  const MainUi = () => {
    if (isFetching) {
      return [1, 2, 3].map((e) => <ThoughtSkeleton key={e} />);
    }
    if (isError) {
      return <p>{JSON.stringify(error)}</p>;
    }
    return thoughts!.map((e) => (
      <Thought
        isAdmin={isAdmin}
        thought={e}
        // eslint-disable-next-line no-underscore-dangle
        key={e._id}
        userId={session.data?.user.id!}
      />
    ));
  };
  return (
    <Box overflowY="scroll" w="100%">
      {MainUi()}
    </Box>
  );
}

export default ThoughtsWrapper;
