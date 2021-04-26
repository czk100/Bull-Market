const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const SocialSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Social = mongoose.model("social", SocialSchema);
