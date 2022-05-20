exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.div = (a, b) => a / b;

exports.test = (a, b) => add(a, b) / sub(a, b);
// module.exports = test
// module.exports = {
//   test,
//   add,
//   sub,
//   div,
// // };
// module.exports.test = test;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.div = div;

// module.exports = {}; // good practice
// exports = "something"; // bad practice
// console.log(module);
