const express = require("express");
const cors = require("cors");
const app = express();
const port = 3007;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});
