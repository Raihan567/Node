// global.console.log("Hello world");

// global.setTimeout(() => {
//   console.log(
//     `I am the setTimeout function, I have asynchronous behavior on NodeJS version `
//   );
// }, 2000);

// global.console.log(`I am last console.log`);

// console.log(__filename);
// console.log(__dirname);

// var a = 10;
// function test() {
//   console.log("test function");
// }
// console.log(global.a);
// global.test();

// console.log(module);
// console.log(__filename);
// console.log(__dirname);

// const math = require("./math");
// console.log(math.add(2, 3));
// console.log(math.sub(4, 2));
// console.log(math.div(4, 2));
// // console.log(math.test(10, 5));

const { add, sub, div, test } = require("./math");
console.log(add(354, 23));
console.log(sub(234, 23));
console.log(div(2314, 23));
