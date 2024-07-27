/* eslint-disable consistent-return */
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials.emailVerified || !credentials.email) {
          return null;
        }
        return credentials;
      },
    }),
  ],
} satisfies NextAuthConfig;
