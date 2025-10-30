const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.REACT_APP_SERVER_PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});
