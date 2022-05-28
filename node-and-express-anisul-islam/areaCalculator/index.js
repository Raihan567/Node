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
  res.sendFile(__dirname + "/404.html");
});

//backed
app.post("/triangle", (req, res) => {
  // const height = req.body.height;
  // const base = req.body.base;
  // const area = 0.5 * height * base;
  // res.send(`<h2>Area of triangle is: ${area}</h2>`);
  const height = req.body.height;
  const base = req.body.base;
  const area = (height * base) / 2;
  res.send(`<h2>Area of triangle is: ${area}</h2>`);
});

app.post("/circle", (req, res) => {
  // const radius = req.body.radius;
  // const area = Math.PI * radius * radius;
  const radius = req.body.radius;
  const area = Math.PI * Math.pow(radius, 2);
  res.send(`<h2>Area of circle is: ${area}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port at ${PORT}`);
});
