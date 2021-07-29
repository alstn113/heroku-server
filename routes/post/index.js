const express = require("express");
const post = express.Router();
const controller = require("./controller");
const passport = require("passport");

/**
 *   @description /api/post
 */

post.get("/", controller.getPostList);
post.get("/:id", controller.getPostDetail);
post.post("/", passport.authenticate("jwt", { session: false }), controller.createPost);
post.delete("/:id", passport.authenticate("jwt", { session: false }), controller.deletePost);

module.exports = post;
