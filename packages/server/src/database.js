import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   database: "teamfinder",
//   max: 20,
// });
export default client;
