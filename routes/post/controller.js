const Post = require("../../models/post");

exports.createPost = async (req, res, next) => {
  const { title, content } = req.body;
  await Post.create({
    title,
    content,
  });
  res.json({ success: true });
};

exports.getPostDetail = async (req, res, next) => {
  const { id } = req.body;
  const postDetail = await Post.findOne({
    where: { id },
  });
  res.json({ postDetail });
};

exports.getPostList = async (req, res, next) => {
  const postList = await Post.findAll({});
  res.json({ postList });
};
