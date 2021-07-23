const express = require("express");
const user = express.Router();
const controller = require("./controller");

/**
 *   @description /api/user
 */

user.get("/", controller.userList);
user.post("/", controller.createUser);

module.exports = user;
