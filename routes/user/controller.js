const User = require("../../models/user");

exports.createUser = async (req, res, next) => {
  const { nick, age } = req.body;
  await User.create({
    nick,
    age,
  });
};

exports.userList = async (req, res, next) => {
  const userList = await User.findAll({});
  res.json({ userList });
};
