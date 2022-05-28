const express = require("express");
const app = express();
app.get("/", (_req, res) => {
  res.send(`<h1>Hello this is Node.js Home page</h1>`);
});
app.post("/", (_req, res) => {
  res.send(`<h1>I am post request</h1>`);
});
app.put("/", (_req, res) => {
  res.send(`<h1>I am Put request</h1>`);
});
app.delete("/", (_req, res) => {
  res.send(`<h1>I am Delete request</h1>`);
});
app.get("/about", (_req, res) => {
  res.send(`<h1> Hello Raihan, I am your About page.</h1>`);
});
app.get("/service", (_req, res) => {
  res.send("<h1>Hello Raihan, I am your service page.</h1>");
});
app.get("/help", (_req, res) => {
  res.send(`<h1>Hello, I am Help page</h1>`);
});

app.get("*", (_req, res) => {
  res.send(`<h1>404 Page Not Found </h1>`);
});
module.exports = app;
