// router is used to create routes in express in a separate file
const router = require("express").Router();
// import the student model
const Student = require("../models/students");

// get all students
router.get("/students", (req, res) => {
  Student.findAll()
    .then((students) => {
      res.status(200).send(students);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// get a particular student
router.get("/students/:id", (req, res) => {
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      // if student not found
      if (!student) {
        res.status(404).send("Student not found.");
      }

      res.status(201).send(student);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// creating a new student
router.post("/students", (req, res) => {
  // create a new student using the Student model
  Student.create({
    name: req.body.name,
    level: req.body.level,
  })
    .then((student) => {
      res.status(200).send(student);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// creating a new student
router.patch("/students/:id", (req, res) => {
  // create a new student using the Student model
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      // if student not found
      if (!student) {
        res.status(404).send("Student not found.");
      }

      // update the student record
      student.name = req.body.name;
      student.level = req.body.level;

      // save the updated student into database
      student
        .save()
        .then((student) => {
          res.status(200).send(student);
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

// delete an student
// get a particular student
router.delete("/students/:id", (req, res) => {
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      // if student not found
      if (!student) {
        res.status(404).send("Student not found.");
      }

      // destory student
      student
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
