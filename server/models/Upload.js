const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const UploadSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: Buffer,
    required: true,
  },
});

module.exports = Upload = mongoose.model("upload", UploadSchema);
