import { serve } from "@hono/node-server";
import { Hono } from "hono";
import postgres from "postgres";

const sql = postgres({
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "hono",
});

const app = new Hono();

app.get("/", async (c) => {
  const result = await sql`SELECT 1 + 1`;
  console.log(result);
  return c.text("Hello!");
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});