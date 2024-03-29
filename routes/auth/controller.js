const User = require("../../models/user");
const authUtils = require("../../utils/auth");

exports.register = async (req, res, next) => {
  const { email, password, nick } = req.body;
  const exUser = await User.findOne({ where: { email: email }, raw: true });
  if (exUser) {
    return res.json({ error: "이미 존재하는 이메일입니다" });
  } else {
    const hash = await authUtils.encryptPassword(password);
    await User.create({
      email,
      nick,
      password: hash,
    }).then(() => res.json({ success: true }));
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email }, raw: true });
  if (user) {
    const result = await authUtils.certifyPassword(password, user.password);
    if (result) {
      const accessToken = await authUtils.generateAccessToken({ id: user.id, email: user.email, nick: user.nick });
      res.cookie("accessToken", accessToken, { sameSite: "none", httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 });
      return res.json({ success: true });
    } else {
      return res.json({ error: "비밀번호가 틀렸습니다" });
    }
  } else {
    return res.json({ error: "존재하지 않는 이메일입니다" });
  }
};

exports.getUser = async (req, res, next) => {
  const decoded = authUtils.verifyAccessToken(req.cookies.accessToken);
  res.json(decoded);
};

exports.logout = async (req, res, next) => {
  res.clearCookie("accessToken").json({ success: true });
};
