const { DataTypes } = require("sequelize");
// get sequelize connection from config file
const sequelize = require("../config");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    priority_level: {
      type: DataTypes.STRING,
      defaultValue: "Low",
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    progress_level: {
      type: DataTypes.STRING,
      defaultValue: "Not Started",
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

module.exports = Task;
