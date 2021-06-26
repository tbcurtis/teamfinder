import { Pool } from "pg";

const pool = new Pool({
  host: "ec2-35-170-85-206.compute-1.amazonaws.com",
  user: "postgres",
  database: "d501hafk566d57",
  max: 20,
});
export default pool;
