const express = require("express");
const router = express.Router();
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");


//Upload Model
const Upload = require("../../models/Upload");

const db = require("../../config/keys").mongoURI;
const storage = new GridFsStorage({
  url: db,
  chunkSize: 1000,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if(err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        }
        resolve(fileInfo);
      });
    });
  }
});

const uploadGrid = multer({storage});

// @route GET applicaitons
// @desc Get ALL Upload
// @access Public
router.get("/", (req, res) => {
  console.log(req.body);
  Upload.findOne({ naem: req.body.name }, function(err, data) {
    if(err) {
      console.log(err);
    }
    
    if (!data) {
      res.json("no data")
    }
  }).then((items) => res.json(items));
});

// @route POST api/Upload
// @desc Create An Upload
// @access Public
router.route('/').post(uploadGrid.single('file'), (req, res, next) => {
  if(req.body) {
    console.log('recieved body');
  }

  
    let newUpload = new Upload({
      name: req.body.name,
      content: req.body.content
    });

    newUpload.save()
    .then((file) => {
      res.status(200).json({
        success: true,
        file
      });
    }).catch(err => res.status(500).json(err));

});

// router.post("/", (req, res) => {
//   const newUpload = new Upload({
//     name: req.body.name,
//     content: req.body.content,
//   });

//   newUpload.save().then((upload) => res.json(upload));
// });

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
