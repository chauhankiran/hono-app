import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello!');
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
