const express = require("express");
const app = express();

app.get("/pany", (req, res) => {
  res.send("<h1>Hi, I am pany Page</h1>");
});
app.get("/get", (req, res) => {
  res.send("<h1>Hi, I am get Page</h1>");
});
app.get("/help", (req, res) => {
  res.send("<h1>Hi, I am help Page</h1>");
});

app.get("/service", (req, res) => {
  res.send("<h1>Hello, I am service page</h1>");
});

app.get("/about", (req, res) => {
  // res.send("<h1>Hi I am about page.</h1>");
  res.json({
    message: "Hello nodejs how are you. I am Looking for you. ",
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Raihan I am NodeJs. Keep learning </h1>");
});
app.get("*", (req, res) => {
  res.send("<h1>Page not Found, 404</h1>");
});
const Port = process.env.Port || 7070;
app.listen(Port, () => {
  console.log("Server is running on port 7070");
});
