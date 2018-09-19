const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the model structure, CHANGE THIS PER PROJECT

const TaskSchema = new mongoose.Schema({
  title: {type: String, required: [true, "A title must be provided"], minlength: [3, "Title must contain at least 3 characters"]},
  description: {type: String, required: [true, "A description must be provided"], minlength: [3, "A description must contain at least 3 characters"], default: ""},
  completed: {type: Boolean, default: false},
}, {timestamps: true})

// set this model in the mongoose library, CHANGE THIS PER PROJECT

mongoose.model('Task', TaskSchema);
