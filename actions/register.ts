import axiosExternal from '@/utils/axios-config';

export const register = async (values: any) => {
  const res = await axiosExternal.post('auth/sign-up', values);
  return res.data;
};
