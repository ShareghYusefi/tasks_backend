const { DataTypes } = require("sequelize");
// get sequelize connection from config file
const sequelize = require("../config");
// import the employee model
const Employee = require("./employees");

const Department = sequelize.define(
  "Department",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

// a department can have many employees
Department.hasMany(Employee, {
  foreignKey: { name: "department_id", allowNull: false },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// a employee belongs to a department
Employee.belongsTo(Department, {
  foreignKey: { name: "department_id", allowNull: false },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Department;
