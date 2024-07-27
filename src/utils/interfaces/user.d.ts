import type { DefaultSession } from 'next-auth';

interface IUser {
  name: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
  email: string;
  interests: string[];
  _id: string;
  userRole: 'user' | 'admin';
  emailVerified: boolean;
  token: string;
}

export type ExtendedaUser = DefaultSession['user'] & IUser;

declare module 'next-auth' {
  interface Session {
    user: ExtendedaUser;
  }
}
