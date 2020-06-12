const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var timeCheckSchema = new Schema({
  id: Number,
  task: String,
  time: {type: Date, default: Date.now},
  complete: Boolean
})