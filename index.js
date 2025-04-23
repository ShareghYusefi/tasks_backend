const express = require("express");
// get sequelize connection from config file
const sequelize = require("./config");
// import the department routes
const departmentRoutes = require("./routes/department");
const employeeRoutes = require("./routes/employee");
const studentsRoutes = require("./routes/student");
var cors = require("cors");
const app = express();
// this allows working with url encoded data
app.use(express.urlencoded({ extended: true }));
// this allows working with json data
app.use(express.json());
// enable CORS for all routes
app.use(cors());

// use the department routes
app.use(departmentRoutes);
app.use(employeeRoutes);
app.use(studentsRoutes);

// testing database connection (asyncronous operation)
sequelize
  .sync() // sync creates the table if it does not exist in the database
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
