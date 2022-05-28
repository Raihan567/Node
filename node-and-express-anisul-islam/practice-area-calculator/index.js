const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (_req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (_req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
app.get("*", (_req, res) => {
  res.sendFile(__dirname + "/error.html");
});

// Backend
//Circle calculation
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * Math.pow(radius, 2);
  res.send(`Area of Triangle is: ${area}`);
});

//Triangle Calculation
app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * height * base;
  res.send(`Area of triangle is: ${area}`);
});
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
