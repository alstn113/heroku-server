const express = require("express");
const post = express.Router();
const controller = require("./controller");

/**
 *   @description /api/post
 */

post.get("/", controller.getPostList);
post.get("/:id", controller.getPostDetail);
post.post("/", controller.createPost);
post.delete("/:id", controller.deletePost);

module.exports = post;
