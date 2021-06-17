import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("test");
});
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
