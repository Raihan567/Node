const http = require("http");
const { nextTick } = require("process");
const PORT = 5000;
const hostName = "127.0.0.1";

const server = http.createServer((_req, res) => {
  res.end(`welcome to my server  hello nodejs`);
});
server.listen(PORT, hostName, () => {
  console.log(`Server is running port at http://${hostName}:${PORT}`);
});
