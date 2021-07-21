const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("test1", { User: User });
});

router.get("/test", (req, res) => {
  res.render("test2");
});

module.exports = router;
