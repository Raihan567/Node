const fs = require("fs");

const testObj = {
  name: "Abu Raihan",
  age: 19,
  profession: "student",
  email: "aburaihansaker567@gmail.com",
  address: {
    city: "Mymensingh",
    country: "BD",
  },
};

// const data = JSON.stringify(testObj);

// fs.writeFile("./test.json", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Yeah, Create a new file successfully.`);
//   }
// });

const data = JSON.stringify(testObj);

fs.writeFile("./test.json", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Create a new file...");
  }
});
