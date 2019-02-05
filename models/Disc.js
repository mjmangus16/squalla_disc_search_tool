const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DiscSchema = new Schema({
  manufacture: {
    type: String,
    required: true
  },
  discName: {
    type: String,
    required: true
  },
  discType: {
    type: String,
    required: true
  },
  stability: {
    type: String,
    required: true
  },
  infiniteRatings: {
    type: Object,
    required: true
  },
  manufactureRatings: {
    type: Object
  },
  link: {
    type: String
  }
});

module.exports = Disc = mongoose.model("discs", DiscSchema);
