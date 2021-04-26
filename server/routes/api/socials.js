const express = require("express");
const router = express.Router();

//Social Model
const Social = require("../../models/Social");

// @route GET applicaitons
// @desc Get ALL Social
// @access Public
router.get("/", (req, res) => {
  Social.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/Social
// @desc Create An Social
// @access Public
router.post("/", (req, res) => {
  const newSocial = new Social({
    name: req.body.name,
    content: req.body.content,
  });

  newSocial.save().then((social) => res.json(social));
});

// @route PUT api/Social
// @desc Edit An Social
// @access Admin
router.put("/", (req, res) => {
  console.log(req.body);
  Social.findOne({ name: req.body.oldName }, function (err, editData) {
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
// @desc Delete A Social
// @access Public
router.delete("/", (req, res) => {
  console.log(req.body);
  Social.findOneAndDelete({ name: req.body.name }, function (err, docs) {
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
