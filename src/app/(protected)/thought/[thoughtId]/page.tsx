'use client';

import { Center } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getThoughtById } from 'actions/thought';
import { useSession } from 'next-auth/react';
import React from 'react';

import Header from '@/components/common/header';
import MenusSection from '@/components/common/menus-section';
import Text from '@/components/common/text';
import Thought from '@/components/common/thought';
import SearchSection from '@/components/home/search-section';
import BaseLayout from '@/components/layouts/base-layout';
import ThoughtSkeleton from '@/components/skeletons/thought-skeleton';
import { onErrorQueryHandler } from '@/utils/helpers/on-error-query';
import { useShowToast } from '@/utils/hooks/use-show-toast';
import type IThought from '@/utils/interfaces/thought';

const MainUi = (
  thought: IThought | undefined,
  isError: boolean,
  isFetching: boolean,
) => {
  const session = useSession();
  const isAdmin = session.data?.user.userRole === 'admin';

  if (isFetching) {
    return <ThoughtSkeleton />;
  }
  if (isError || !thought) {
    return (
      <Center>
        <Text>Something Went Wrong!</Text>
      </Center>
    );
  }

  return (
    <Thought
      isAdmin={isAdmin}
      thought={thought}
      userId={session.data?.user.id!}
    />
  );
};

function ThougthDetails({ params }: any) {
  const { thoughtId } = params;
  const toast = useShowToast();

  const {
    data: thought,
    isFetching,
    isError,
  } = useQuery({
    queryFn: () => getThoughtById(thoughtId),
    queryKey: ['thoughts', thoughtId],
    onError: (error) => onErrorQueryHandler(error, toast),
    enabled: !!thoughtId,
  });

  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={MainUi(thought, isError, isFetching)}
      sectionStart={<MenusSection />}
      sectionEnd={<SearchSection />}
    />
  );
}

export default ThougthDetails;
