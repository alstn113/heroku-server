const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

exports.certifyPassword = (requestPassword, storedPassword) => {
  return bcrypt.compare(requestPassword, storedPassword);
};

exports.encryptPassword = (password) => {
  return bcrypt.hash(password, 12);
};

exports.generateAccessToken = (information) => {
  return jwt.sign(information, secretKey, { expiresIn: "1h", issuer: "vue-test-63194", subject: "accessToken" });
};

exports.verifyAccessToken = (token) => {
  if (token) {
    return jwt.verify(token, secretKey);
  }
};
