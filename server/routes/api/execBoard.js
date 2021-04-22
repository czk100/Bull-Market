const express = require("express");
const router = express.Router();

//Announcement Model
const ExecBoard = require('../../models/ExecBoard');

// @route GET applicaitons
// @desc Get ALL Announcement
// @access Public
router.get("/", (req, res) => {
    ExecBoard.find()
    .then((items) => res.json(items));
});

// @route POST api/Announcement
// @desc Create An Announcement
// @access Public
router.post('/', (req, res) => {
    const newExecBoard = new ExecBoard({
        position: req.body.position,
        name: req.body.name,
        email: req.body.email,
        linkedIn: req.body.linkedIn
    });


    newExecBoard.save().then((execBoard) => res.json(execBoard));
});

// @route PUT api/Announcement
// @desc Edit An Announcement
// @access Admin
router.put("/", (req, res) => {
  console.log(req.body);
  ExecBoard.findOne({ name: req.body.oldName }, function (err, editData) {
    if (err) {
      console.log(err);
    }
    if (!editData) {
      res.json("no data");
    } else {
      editData.position = req.body.newData.position;
      editData.name = req.body.newData.name;
      editData.email = req.body.newData.email;
      editData.linkedIn = req.body.newData.linkedIn;
      editData.save(function (err) {
        if (err) {
          console.log(err);
          res.json("edit save failed");
        } else {
          res.json("edit Complete");
        }
      });
    }
  });
});

// @route DELETE api/items/:id
// @desc Delete A Announcement
// @access Public
router.delete("/", (req, res) => {
  console.log(req.body);
  ExecBoard.findOneAndDelete({ name: req.body.name }, function (err, docs) {
    if (err) {
      res.json("delete failed");
      console.log(err);
    } else if (docs) {
      res.json("delete Complete");
      console.log(docs);
    } else {
      res.json("docs null Complete");
    }
  });
});

module.exports = router;
