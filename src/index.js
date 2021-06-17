import express from "express";
//import { Pool } from "pg";
//import client from "./database";
//import test from "./database";
import pool from "./database";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  pool
    .query("SELECT NOW() as now")
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.log(e.stack));
});

app.listen(port, () => {
  console.log(`listening on http://localhost${port}`);
});
