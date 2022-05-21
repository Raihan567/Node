const router = require("express").Router();
router.get("/logIn", (req, res, next) => {
  res.send("I am login Route");
});
router.get("/logOut", (req, res, next) => {
  res.send("I am logout Route");
});
router.get("/signUp", (req, res, next) => {
  res.send("I am signup Route");
});
router.get("/signOut", (req, res, next) => {
  res.send("I am signOut Route");
});

// module.router = router;

module.exports = router;
