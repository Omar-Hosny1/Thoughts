import axiosExternal from '@/utils/axios-config';

export const verifyEmail = async (token: string) => {
  const res = await axiosExternal.post('auth/new-verification', { token });
  return res.data;
};
