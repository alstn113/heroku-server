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
  const { id } = req.params;
  const postDetail = await Post.findOne({
    where: { id },
  });
  res.json({ postDetail });
};

exports.deletePost = async (req, res, next) => {
  const { id } = req.params;
  await Post.destroy({
    where: { id },
  });
  res.json({ success: true });
};

exports.getPostList = async (req, res, next) => {
  const postList = await Post.findAll({});
  res.json({ postList });
};
