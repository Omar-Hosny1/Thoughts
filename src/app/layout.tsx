import '../styles/global.css';

import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

import { queryClient } from '@/utils/query-client';
import { Providers } from '@/utils/theme/providers';

import { auth } from '../../auth';

export const metadata: Metadata = {
  title: 'Thoughts.',
  description: 'Write your first thought now... Be Limitless',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <html lang="en">
          <body>
            <Providers>{children}</Providers>
          </body>
        </html>
      </SessionProvider>
    </QueryClientProvider>
  );
}
