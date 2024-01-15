'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useState} from 'react';
import {trpc} from './trpc';
import {httpBatchLink} from '@trpc/client';
import {Hello} from './hello';

export default function Page(): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3001',
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hello />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
