import express, { json } from "express";
import pool from "./database";
import cors from "cors";

const app = express();
const router = express.Router();
const port = 3001;

app.use(json()); //use middleware
app.use(cors());

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

router.get("/getAllFullRequests", (req, res) => {
  pool
    .query(
      `SELECT * FROM request where (player1 is not null and player2 is not null and player3 is not null);`
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

router.get("/getRequest/:id", (req, res) => {
  //console.log(req);
  pool
    .query(`SELECT * FROM request where(id = $1)`, [req.params.id])
    .then((results) => {
      if (results.rows != null) {
        console.table(results.rows), res.send(results.rows);
      } else {
        res.send({});
      }
    })
    .catch((e) => console.error(e.stack));
});

router.post("/createRequest", (req, res) => {
  let { creator } = req.body;
  //console.log(req);
  pool
    .query(`INSERT INTO request(creator,createdOn) values($1,NOW())`, [creator])
    .then((results) => {
      res.status(201).send({ message: "Insertion successful" });
      //console.table(results), res.send(results);
    })
    .catch((e) => console.error(e.stack));
});

router.post("/acceptRequest", (req, res) => {
  let { id, playername } = req.body;
  let player = "";
  pool
    .query(
      `SELECT * FROM request where(id = $1 and (player1 is null or player2 is null or player3 is null))`,
      [id]
    )
    .then((results1) => {
      if (results1.rowCount === 0) {
        res.status(404).send({ message: "request not found" });
      } else {
        if (results1.rows[0].player1 === null) {
          player = "player1";
        } else if (results1.rows[0].player2 === null) {
          player = "player2";
        } else if (results1.rows[0].player3 === null) {
          player = "player3";
        }
        pool
          .query(`UPDATE request set ${player} = $1::text where id = $2`, [
            playername,
            id,
          ])
          .then((results) => {
            res.status(201).send({ message: `Sucessfully added ${player}` });
          })
          .catch((e) => console.error(e.stack));
      }
    })
    .catch((e) => console.error(e.stack));
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
