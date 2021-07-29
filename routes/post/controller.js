const Post = require("../../models/post");
const User = require("../../models/user");

exports.createPost = async (req, res, next) => {
  const { title, content } = req.body;
  await Post.create({
    title,
    content,
    user_id: req.user.id,
  });
  res.json({ success: true });
};

exports.getPostDetail = async (req, res, next) => {
  const { id } = req.params;
  const postDetail = await Post.findOne({
    where: { id },
    include: [{ model: User, attributes: ["nick"] }],
    raw: true,
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
  let options = {};
  const take = 10;
  if (req.query.page) {
    const page = parseInt(req.query.page) || 1;
    options = {
      ...options,
      limit: take, // 몇 개 가져올지
      offset: (page - 1) * take, // 몇 개 뛰어넘을지
      //프론트에서 사용할만큼만 주고 붙여서 사용함.
    };
  }
  const total = await Post.count({
    ...options,
  });
  const lastpage = Math.ceil(total / take);
  const postList = await Post.findAll({
    include: [{ model: User, attributes: ["nick"] }],
    order: [["createdAt", "DESC"]],
    raw: true,
    ...options,
  });
  res.json({ postList, lastpage });
};
