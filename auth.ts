import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';

import authConfig from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 - 60 * 5 },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (trigger === 'signIn') {
        // eslint-disable-next-line no-param-reassign
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user = token.user as any;
      const backEndToken = session.user.token;
      if (backEndToken) {
        jwt.verify(backEndToken, process.env.AUTH_SECRET!);
      }
      return session;
    },
  },
  ...authConfig,
});
