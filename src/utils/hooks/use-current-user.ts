import { useSession } from 'next-auth/react';

export const useCurrentUser = () => {
  const { data } = useSession();
  return data?.user;
};
