require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`<h1> Server is ready. </h1>`);
});

app.use("*", (req, res, next) => {
 res.status(404).json({
   message: "not found"
 })
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
