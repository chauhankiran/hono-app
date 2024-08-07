import { serve } from "@hono/node-server";
import { Hono } from "hono";
import postgres from "postgres";
import "dotenv/config";

const sql = postgres({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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