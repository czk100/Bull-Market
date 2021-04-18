const express = require('express');
const router = express.Router();

//Announcement Model
const Question = require('../../models/Question');

// @route GET applicaitons
// @desc Get ALL Announcement
// @access Public
router.get("/", (req, res) => {
  Question.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/Announcement
// @desc Create An Announcement
// @access Public
router.post("/", (req, res) => {
  const newQuestion = new Question({
    question: req.body.question,
    answer: req.body.answer,
  });

  newQuestion.save().then((question) => res.json(question));
});

// @route PUT api/Announcement
// @desc Edit An Announcement
// @access Admin
router.put("/", (req, res) => {
  console.log(req.body);
  Question.findOne({ question: req.body.oldQuestion }, function (err, editData) {
    if (err) {
      console.log(err);
    }
    if (!editData) {
      res.json("no data");
    } else {
      editData.answer = req.body.newData.answer;
      editData.question = req.body.newData.question;
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
  Question.findOneAndDelete({ question: req.body.question }, function (err, docs) {
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