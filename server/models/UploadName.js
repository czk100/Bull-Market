const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const UploadNameSchema = Schema({
  name: {
    type: String,
    required: true,
  }
});

module.exports = UploadName = mongoose.model("uploadName", UploadNameSchema);
