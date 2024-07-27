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
  session: { strategy: 'jwt' },
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
      // const decodedToken = jwt.decode(session.user.token) as jwt.JwtPayload;
      // // Check if the token has expired
      // const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix time
      // if (decodedToken.exp && decodedToken.exp < currentTime) {
      //   // Token has expired
      //   // You can handle the expired token case here
      //   console.log('Token has expired');
      //   // signOut();
      //   // throw new Error('ACCESS DENIED TOKEN EXP');
      //   // s();
      //   // signOut();
      //   // signOut({ redirectTo: '/auth/login?message=session_expired' });
      // }
      return session;
    },
  },
  ...authConfig,
});
