const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("<h1>Hello NodeJS</h1>");
});

server.listen(5000, () => {
  console.log("Server is running at 5000 port");
});
