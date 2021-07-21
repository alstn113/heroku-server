const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("test1");
});

router.get("/test", (req, res) => {
  res.render("test2");
});

module.exports = router;
