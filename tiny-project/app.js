const express = require("express");
const app = express();
const morgan = require("morgan");
const contactRoute = require("./contactRoute");

app.use("./contacts", contactRoute);
app.get("*", (req, res) => {
  res.send(`Please use the correct Routes`);
});

const PORT = process.env.PORT || 8080;
app.use(morgan("dev"));
app.listen(PORT, () => {
  console.log(`Server is running port at ${PORT}`);
});
