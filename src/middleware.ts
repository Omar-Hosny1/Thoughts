import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';

import authConfig from '../auth.config';
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from '../routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedin = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoutes) {
    if (isLoggedin) {
      NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      return;
    }
    return;
  }

  if (!isLoggedin && !isPublicRoutes) {
    NextResponse.redirect(new URL(`/auth/login`, nextUrl));
  }
});

export const config = {
  // matcher : ["/auth/login"] // the middleware will work on these paths
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
