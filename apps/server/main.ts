import {createHTTPServer} from '@trpc/server/adapters/standalone';
import {appRouter} from './app.router';
import cors from 'cors';

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(3001);
