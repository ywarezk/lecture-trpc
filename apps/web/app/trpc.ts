import {createTRPCReact} from '@trpc/react-query';
import type {AppRouter} from 'server/app.router.ts';

export const trpc = createTRPCReact<AppRouter>();
