const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const Post = require("./post");
const Tag = require("./tag");

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Post = Post;
db.Tag = Tag;

Post.init(sequelize);
Tag.init(sequelize);

Post.associate(db);
Tag.associate(db);

module.exports = db;
