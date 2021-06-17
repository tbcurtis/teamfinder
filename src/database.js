// const { Client } = require("pg");

// const client = new Client();

// client.connect.then(() => {
//     console.log("Teamfinder Database Connected");
// }.catch(err) {
//     console.log(err)
// });

// const res = await client.query("SELECT $1::text as message", ["Hello world!"]);
// console.log(res.rows[0].message); // Hello world!
// await client.end();

// export default client;

// const { Client } = require('pg')
// const client = new Client()
// client.connect(err => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected')
//   }
// })

// import { Client } from "pg";
// const client = new Client();
// client
//   .connect()
//   .then(() => console.log("connected"))
//   .catch((err) => console.error("connection error", err.stack));

// let test = () => {

// }

// export test;

import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
export default pool;
