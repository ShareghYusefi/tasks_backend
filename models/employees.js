const { DataTypes } = require("sequelize");
// get sequelize connection from config file
const sequelize = require("../config");

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    Salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

module.exports = Employee;
