'use client';

import { Center } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getThoughts } from 'actions/thought';
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
  thoughts: IThought[] | undefined,
  isError: boolean,
  isFetching: boolean,
) => {
  const session = useSession();
  const isAdmin = session.data?.user.userRole === 'admin';

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
      isAdmin={isAdmin}
      thought={e}
      key={e.id}
      userId={session.data?.user.id!}
    />
  ));
};

function PendingBlogsPage() {
  const toast = useShowToast();

  const {
    data: thoughts,
    isError,
    isFetching,
  } = useQuery({
    queryFn: () => getThoughts('pending'),
    queryKey: ['thoughts', 'pending'],
    onError: (error) => onErrorQueryHandler(error, toast),
  });

  return (
    <BaseLayout
      headerContent={<Header />}
      mainSection={<>{MainUi(thoughts, isError, isFetching)}</>}
      sectionStart={<MenusSection />}
      sectionEnd={<SearchSection />}
    />
  );
}

export default PendingBlogsPage;
