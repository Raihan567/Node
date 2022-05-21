const express = require("express");
const morgan = require("morgan");

const app = express();

// app.use(morgan("dev"));

function customMiddleware(req, res, next) {
  // console.log("I am logged");
  if (req.url === "/help") {
    res.send("<h1>Sorry, this page is blocked by Admin</h1>");
  }
  next();
}
function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}
const middleware = [customMiddleware, tinyLogger()];
app.use(middleware);

// User Router
const router = express.Router()
router.get('/logIn', (req, res, next)=>{
  res.send('I am login Route')
})
router.get('/logOut', (req, res, next)=>{
  res.send('I am logout Route')
})
router.get('/signUp', (req, res, next)=>{
  res.send('I am signup Route')
})
router.get('/signOut', (req, res, next)=>{
  res.send('I am signOut Route')
})
//User Router End
app.use('/user', router )

// app.get("/pany", (req, res) => {
//   res.send("<h1>Hi, I am pany Page</h1>");
// });

// app.get("/get", (req, res) => {
//   res.send("<h1>Hi, I am get Page</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send("<h1>Hi, I am help Page</h1>");
// });

// app.get("/service", (req, res) => {
//   res.send("<h1>Hello, I am service page</h1>");
// });

// app.get("/about", morgan("dev"), (req, res) => {
//   // res.send("<h1>Hi I am about page.</h1>");
//   res.json({
//     message: "Hello nodejs how are you. I am Looking for you. ",
//   });
// });

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
