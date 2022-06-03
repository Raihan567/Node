require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8001;
//Home route
app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// 
app.listen(PORT, () => {
  console.log(`Server is running port at ${PORT}`);
});
