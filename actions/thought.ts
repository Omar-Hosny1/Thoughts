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

export const getThoughts = async (status: IThought['status']) => {
  const session = await getSession();
  const res = await axiosExternal.get(
    `thoughts?userId=${session?.user.id}&status=${status}`,
    {
      headers: { Authorization: `Barrer ${session?.user.token}` },
    },
  );

  return res.data.thoughts as Array<IThought>;
};

export const getThoughtById = async (id: string) => {
  const session = await getSession();
  const res = await axiosExternal.get(
    `thoughts/${id}?userId=${session?.user.id}`,
    {
      headers: { Authorization: `Barrer ${session?.user.token}` },
    },
  );

  return res.data.thought as IThought;
};

export const updateThoughtStatus = async (
  status: IThought['status'],
  id: string,
) => {
  const session = await getSession();

  const res = await axiosExternal.put(
    `thoughts/status/${id}?userId=${session?.user.id}`,
    {
      status,
    },
    {
      headers: { Authorization: `Barrer ${session?.user.token}` },
    },
  );

  return res.data;
};

export const updateThought = async (thought: IThought, id: string) => {
  const session = await getSession();
  console.log(thought);

  const res = await axiosExternal.put(
    `thoughts/${id}?userId=${session?.user.id}`,
    thought,
    {
      headers: { Authorization: `Barrer ${session?.user.token}` },
    },
  );

  return res.data;
};

export const deleteThoughtById = async (id: string) => {
  const session = await getSession();

  const res = await axiosExternal.delete(
    `thoughts/${id}?userId=${session?.user.id}`,
    {
      headers: { Authorization: `Barrer ${session?.user.token}` },
    },
  );

  return res.data;
};
