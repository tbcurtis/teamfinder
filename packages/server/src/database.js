import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "teamfinder",
  max: 20,
});
export default pool;
