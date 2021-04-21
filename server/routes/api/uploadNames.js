const express = require("express");
const router = express.Router();

//Announcement Model
const UploadName = require('../../models/UploadName');

// @route GET applicaitons
// @desc Get ALL Announcement
// @access Public
router.get("/", (req, res) => {
    UploadName.find()
    .then((items) => res.json(items));
});

// @route POST api/Announcement
// @desc Create An Announcement
// @access Public
router.post('/', (req, res) => {
    const newUploadName = new UploadName({
        name: req.body.name
    });


    newUploadName.save().then((uploadName) => res.json(uploadName));
});

// @route DELETE api/items/:id
// @desc Delete A Announcement
// @access Public
router.delete("/", (req, res) => {
  console.log(req.body);
  UploadName.findOneAndDelete({ name: req.body.name }, function (err, docs) {
    if (err) {
      res.json("delete failed");
      console.log(err);
    } else if (docs) {
      res.json("delete Complete");
      console.log(docs);
    } else {
      res.json("UploadName null Complete");
    }
  });
});

module.exports = router;
