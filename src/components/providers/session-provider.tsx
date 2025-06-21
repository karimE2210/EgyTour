'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider
      refetchOnWindowFocus={true}
      refetchInterval={5 * 60} // Refetch session every 5 minutes
    >
      {children}
    </SessionProvider>
  );
} 