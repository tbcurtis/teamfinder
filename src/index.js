import express from "express";
import pool from "./database";

const app = express();
const router = express.Router();
const port = 3000;

//run db migration
pool
  .query(
    `create table IF NOT EXISTS request (
    id serial PRIMARY KEY ,
    creator text NOT NULL,
    player1 text,
    player2 text,
    player3 text,
    createdOn TIMESTAMP NOT NULL)`
  )
  .then((dbres) => {
    console.log(dbres.rows[0]);
  })
  .catch((e) => console.error(e.stack));

router.get("/", (req, res) => {
  pool
    .query("SELECT NOW() as now")
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.log(e.stack));
});
router.get("/getAllOpenRequests", (req, res) => {
  pool
    .query(
      `SELECT * FROM request where( player1 is not null or player2 is not null or player3 is not null)`
    )
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});
router.get("/getRequest", (req, res) => {
  pool
    .query(`SELECT * FROM request where(id = $1)`)
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});
router.post("/createRequest", (req, res) => {
  pool
    .query(`INSERT INTO request values($creator,$player1,$player2,$player3)`)
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});
router.post("/acceptRequest", (req, res) => {
  pool
    .query(`UPDATE request where ($1 = id) set $????? = $2`)
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});

app.use("/api", router);
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
