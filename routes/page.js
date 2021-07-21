const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
  const user = User.findAll({});
  res.render("test1", { User: user });
});

router.get("/test", (req, res) => {
  res.render("test2");
});

router.post("/create", (req, res) => {
  User.create({
    nick: req.body.nick,
    age: req.body.age,
  });
});

router.get("/give", (req, res) => {
  return res.json({ nickname: "김민수" });
});

module.exports = router;
