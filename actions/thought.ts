import { getSession } from 'next-auth/react';
import type * as yup from 'yup';

import axiosExternal from '@/utils/axios-config';
import type IThought from '@/utils/interfaces/thought';
import type AddThoughtSchema from '@/validations/add-tought-form-schema';

export const createThought = async (
  thought: yup.InferType<typeof AddThoughtSchema>,
) => {
  const session = await getSession();
  const res = await axiosExternal.post(
    `thoughts?userId=${session?.user.id}`,
    { ...thought, userId: session?.user.id },
    {
      headers: { Authorization: `Barrer ${session?.user.token}` },
    },
  );

  return res.data;
};

export const getThoughts = async () => {
  const session = await getSession();
  const res = await axiosExternal.get(`thoughts?userId=${session?.user.id}`, {
    headers: { Authorization: `Barrer ${session?.user.token}` },
  });

  return res.data.thoughts as Array<IThought>;
};
