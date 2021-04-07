const express = require("express");
const router = express.Router();

//Announcement Model
const Announcement = require('../../models/Announcement');

// @route GET applicaitons
// @desc Get ALL Announcement
// @access Public
router.get("/", (req, res) => {
  Announcement.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/Announcement
// @desc Create An Announcement
// @access Public
router.post('/', (req, res) => {
    const newAnnouncement = new Announcement({
        name: req.body.name,
        content: req.body.content
    });


  newAnnouncement.save().then((announcement) => res.json(announcement));
});

// @route PUT api/Announcement
// @desc Edit An Announcement
// @access Admin
router.put("/", (req, res) => {
  console.log(req.body);
  Announcement.findOne({ name: req.body.oldName }, function (err, editData) {
    if (err) {
      console.log(err);
    }
    if (!editData) {
      res.json("no data");
    } else {
      editData.content = req.body.newData.content;
      editData.name = req.body.newData.name;
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
  Announcement.findOneAndDelete({ name: req.body.name }, function (err, docs) {
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
