const express = require("express");
const router = express.Router();
const controller = require("./controller");

/**
 *   @description /api/user
 */

router.get("/api/user", controller.userList);
router.post("/api/user", controller.createUser);

module.exports = router;
