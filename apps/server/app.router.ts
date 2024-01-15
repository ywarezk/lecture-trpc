/**
 * trpc router with a query to send hello world
 */

import {router, publicProcedure} from './trpc';
import {z} from 'zod';

const books = ['hello', 'world'];

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return 'Hello world';
  }),

  // {message: string}
  log: publicProcedure
    .input(
      z.object({
        message: z.string().min(3).max(10),
      })
    )
    .output(z.array(z.string()))
    .query(({input}) => {
      return [input.message];
    }),

  add: publicProcedure
    .input(z.string())
    .output(z.void())
    .mutation(({input}) => {
      books.push(input);
    }),
});

export type AppRouter = typeof appRouter;
