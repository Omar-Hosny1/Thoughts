import type * as yup from 'yup';

import axiosExternal from '@/utils/axios-config';
import type LoginFormSchema from '@/validations/login-form-schema';

export const login = async (values: yup.InferType<typeof LoginFormSchema>) => {
  const res = await axiosExternal.post('auth/sign-in', values);
  return res.data;
};
