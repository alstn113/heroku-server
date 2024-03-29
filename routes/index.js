const express = require("express");
const router = express.Router();

const post = require("./post");
const auth = require("./auth");

router.use("/post", post);
router.use("/auth", auth);

module.exports = router;
