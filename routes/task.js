// router is used to create routes in express in a separate file
const router = require("express").Router();
// import the task model
const Task = require("../models/tasks");

// get all tasks
router.get("/tasks", (req, res) => {
  Task.findAll()
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// get a particular task
router.get("/tasks/:id", (req, res) => {
  Task.findByPk(parseInt(req.params.id))
    .then((task) => {
      // if task not found
      if (!task) {
        res.status(404).send("Task not found.");
      }

      res.status(201).send(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// creating a new task
router.post("/tasks", (req, res) => {
  // create a new task using the Task model
  Task.create({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    category: req.body.category,
    priority_level: req.body.priority_level,
    progress_level: req.body.progress_level,
  })
    .then((task) => {
      res.status(200).send(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

// creating a new task
router.patch("/tasks/:id", (req, res) => {
  // create a new task using the Task model
  Task.findByPk(parseInt(req.params.id))
    .then((task) => {
      // if task not found
      if (!task) {
        res.status(404).send("Task not found.");
      }

      // update the task record
      task.title = req.body.title;
      task.description = req.body.description;
      task.date = req.body.date;
      task.time = req.body.time;
      task.category = req.body.category;
      (priority_level = req.body.priority_level),
        (progress_level = req.body.progress_level),
        // save the updated task into database
        task
          .save()
          .then((task) => {
            res.status(200).send(task);
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

// delete an task
// get a particular task
router.delete("/tasks/:id", (req, res) => {
  Task.findByPk(parseInt(req.params.id))
    .then((task) => {
      // if task not found
      if (!task) {
        res.status(404).send("Task not found.");
      }

      // destory task
      task
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
