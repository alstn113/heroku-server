const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const Post = require("./post");
const Tag = require("./tag");
const User = require("./user");

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Post = Post;
db.Tag = Tag;
db.User = User;

Post.init(sequelize);
Tag.init(sequelize);
User.init(sequelize);

Post.associate(db);
Tag.associate(db);
User.associate(db);

module.exports = db;
