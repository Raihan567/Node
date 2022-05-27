const os = require("os");
// console.log(os.homedir());
// console.log(os.getPriority());
const path = require("path");
// console.log(path);

const extensionName = path.extname("index.html");
// console.log(extensionName);

const joinName = path.join(__dirname + "/index.js");
console.log(joinName);
