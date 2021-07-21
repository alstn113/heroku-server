const express = require("express");

const router = express.Router();

router.get("/test1", (req, res) => {
  res.render("test1");
});

router.get("/test2", (req, res) => {
  res.render("test2");
});

module.exports = router;
