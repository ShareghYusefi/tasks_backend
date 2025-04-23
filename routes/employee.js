// router is used to create routes in express in a separate file
const router = require("express").Router();
// import the employee model
const Employee = require("../models/employees");

// get all employees
router.get("/employees", (req, res) => {
  Employee.findAll()
    .then((employees) => {
      res.status(200).send(employees);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// get a particular employee
router.get("/employees/:id", (req, res) => {
  Employee.findByPk(parseInt(req.params.id))
    .then((employee) => {
      // if employee not found
      if (!employee) {
        res.status(404).send("Employee not found.");
      }

      res.status(201).send(employee);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// creating a new employee
router.post("/employees", (req, res) => {
  // create a new employee using the Employee model
  Employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    Salary: req.body.Salary,
    department_id: parseInt(req.body.department_id),
  })
    .then((employee) => {
      res.status(200).send(employee);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// creating a new employee
router.patch("/employees/:id", (req, res) => {
  // create a new employee using the Employee model
  Employee.findByPk(parseInt(req.params.id))
    .then((employee) => {
      // if employee not found
      if (!employee) {
        res.status(404).send("Employee not found.");
      }

      // update the employee record
      employee.firstName = req.body.firstName;
      employee.lastName = req.body.lastName;
      employee.Salary = req.body.Salary;
      employee.department_id = parseInt(req.body.department_id);

      // save the updated employee into database
      employee
        .save()
        .then((employee) => {
          res.status(200).send(employee);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err.message);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// delete an employee
// get a particular employee
router.delete("/employees/:id", (req, res) => {
  Employee.findByPk(parseInt(req.params.id))
    .then((employee) => {
      // if employee not found
      if (!employee) {
        res.status(404).send("Employee not found.");
      }

      // destory employee
      employee
        .destroy()
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err.message);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// export the router
module.exports = router;
