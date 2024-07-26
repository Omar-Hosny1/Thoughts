import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    Credentials({
      async authorize() {
        return {};
      },
    }),
  ],
} satisfies NextAuthConfig;
