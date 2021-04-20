const express = require("express");
const router = express.Router();

//Upload Model
const Upload = require("../../models/Upload");

// @route GET applicaitons
// @desc Get ALL Upload
// @access Public
router.get("/", (req, res) => {
  Upload.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/Upload
// @desc Create An Upload
// @access Public
router.post("/", (req, res) => {
  const newUpload = new Upload({
    name: req.body.name,
    content: req.body.content,
  });

  newUpload.save().then((upload) => res.json(upload));
});

// @route PUT api/Upload
// @desc Edit An Upload
// @access Admin
router.put("/", (req, res) => {
  console.log(req.body);
  Upload.findOne({ name: req.body.oldName }, function (err, editData) {
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
// @desc Delete An Upload
// @access Public
router.delete("/", (req, res) => {
  console.log(req.body);
  Upload.findOneAndDelete({ name: req.body.name }, function (err, docs) {
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
