const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Disc2Schema = new Schema({
  brand: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  stability: {
    type: String,
    required: true
  },
  infinite_ratings: {
    type: String,
    required: true
  },
  man_ratings: {
    type: String
  },
  link: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  flight_path: {
    type: String
  },
  diameter: {
    type: String
  },
  height: {
    type: String
  },
  rim_depth: {
    type: String
  },
  rim_width: {
    type: String
  },
  max_weight: {
    type: String
  },
  price_range: {
    type: String
  }
});

module.exports = Disc2 = mongoose.model("discs2", Disc2Schema);
