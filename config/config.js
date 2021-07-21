require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.DEV_PASSWORD,
    database: "deploy",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  },
};
