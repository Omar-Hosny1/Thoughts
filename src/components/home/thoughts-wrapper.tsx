import { Box, Center } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getThoughts } from 'actions/thought';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React from 'react';

import { onErrorQueryHandler } from '@/utils/helpers/on-error-query';
import { useShowToast } from '@/utils/hooks/use-show-toast';
import type IThought from '@/utils/interfaces/thought';

import Text from '../common/text';
import Thought from '../common/thought';
import ThoughtSkeleton from '../skeletons/thought-skeleton';

const MainUi = (
  thoughts: IThought[] | undefined,
  isError: boolean,
  isFetching: boolean,
) => {
  const session = useSession();
  const isAdmin = session.data?.user.userRole === 'admin';
  const router = useRouter();

  if (isFetching) {
    return [1, 2, 3].map((e) => <ThoughtSkeleton key={e} />);
  }
  if (isError || !thoughts) {
    return (
      <Center>
        <Text>Something Went Wrong!</Text>
      </Center>
    );
  }

  if (thoughts.length === 0) {
    return (
      <Center>
        <Text>No Thoughts Till Now</Text>
      </Center>
    );
  }

  return thoughts.map((e) => (
    <Thought
      thoughtConfig={{
        onClick: () => {
          router.push(`thought/${e.id}`);
        },
      }}
      isAdmin={isAdmin}
      thought={e}
      key={e.id}
      userId={session.data?.user.id!}
    />
  ));
};

function ThoughtsWrapper() {
  const toast = useShowToast();

  const {
    data: thoughts,
    isError,
    isFetching,
  } = useQuery({
    queryFn: getThoughts,
    queryKey: ['thoughts'],
    onError: (error) => onErrorQueryHandler(error, toast),
  });

  return (
    <Box overflowY="scroll" w="100%" padding="5px">
      {MainUi(thoughts, isError, isFetching)}
    </Box>
  );
}

export default ThoughtsWrapper;
