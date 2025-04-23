// Import sequelize
const { Sequelize } = require("sequelize");

// Use sequelize to make a connection to the database
const sequelize = new Sequelize("organization", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
  logging: console.log,
});

// Export the sequelize object
module.exports = sequelize;
