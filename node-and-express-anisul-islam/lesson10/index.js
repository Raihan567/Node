require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send(`<h1>Hello Raihan, Server is ready</h1`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port at ${PORT}`);
});
