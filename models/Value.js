const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ValuesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
});

module.exports = Value = mongoose.model("values", ValuesSchema);
