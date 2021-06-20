import express, { json } from "express";
import pool from "./database";

const app = express();
const router = express.Router();
const port = 3000;

app.use(json()); //use middleware

//run db migration
pool
  .query(
    `create table IF NOT EXISTS request (
    id serial PRIMARY KEY ,
    creator text NOT NULL,
    player1 text,
    player2 text,
    player3 text,
    createdOn TIMESTAMP NOT NULL);`
  )
  .then((dbres) => {
    console.table(dbres.rows);
  })
  .catch((e) => console.error(e.stack));

router.get("/", (req, res) => {
  pool
    .query("SELECT NOW() as now")
    .then((results) => {
      console.table(results.rows), res.send(results.rows[0]);
    })
    .catch((e) => console.log(e.stack));
});
router.get("/getAllOpenRequests", (req, res) => {
  pool
    .query(
      `SELECT * FROM request where( player1 is null or player2 is null or player3 is null);`
    )
    .then((results) => {
      if (results.rows != null) {
        console.table(results.rows), res.send(results.rows);
      } else {
        res.send({});
      }
    })
    .catch((e) => console.error(e.stack));
});
router.get("/getRequest", (req, res) => {
  pool
    .query(`SELECT * FROM request where(id = $1)`)
    .then((results) => {
      console.table(results.rows), res.send(results.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});
router.post("/createRequest", (req, res) => {
  let { creator } = req.body;
  //console.log(req);
  pool
    .query(`INSERT INTO request(creator,createdOn) values($1,NOW())`, [creator])
    .then((results) => {
      res.status(201).send({message:"Insertion successful"})
      //console.table(results), res.send(results);
    })
    .catch((e) => console.error(e.stack));
});
router.post("/acceptRequest", (req, res) => {
  pool
    .query(`UPDATE request where ($1 = id) set $????? = $2`)
    .then((results) => {
      console.table(results.rows), res.send(results.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
