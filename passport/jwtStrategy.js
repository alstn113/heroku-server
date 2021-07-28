const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;

const User = require("../models/user");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["accessToken"];
  }
  return token;
};

const JWT_CONFIG = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET,
};

const JWT_VERIFY = async (payload, done) => {
  User.findOne({ where: { id: payload.id }, attributes: { exclude: ["password"] }, raw: true, nest: true })
    .then((user) => done(null, user))
    .catch((err) => done(err));
};

module.exports = () => {
  passport.use("jwt", new JwtStrategy(JWT_CONFIG, JWT_VERIFY));
};
