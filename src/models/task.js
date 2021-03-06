const mongoose = require("mongoose");
const validator = require("validator");

const Task = mongoose.model("Task", {
  todo: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = Task
