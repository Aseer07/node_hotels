const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./db_connection");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome to my hotel application");
});

const menuRoutes = require("./routes/menuRoutes");
const personRoutes = require("./routes/personRoutes");
app.use("/menuItem", menuRoutes);
app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
