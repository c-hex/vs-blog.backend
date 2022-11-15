const express = require("express");
const cors = require("cors");
const indexRouter = require("./router/index");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`node listening on port ${port}`);
});
