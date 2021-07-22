const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("test1");
});

router.get("/test", async (req, res) => {
  const user = await User.findAll({});
  res.render("test2", { User: user });
});

router.post("/create", async (req, res) => {
  await User.create({
    nick: req.body.nick,
    age: req.body.age,
  });
  res.redirect("/");
});

router.get("/api/book", async (req, res) => {
  res.json({ title: "kawaii" });
});

module.exports = router;
