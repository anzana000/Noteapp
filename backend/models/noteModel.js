const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A note must have a title"],
    trim: true,
    maxlength:[10,'A name must be within 10 characters!']
  },

  description: {
    type: String,
    required: [true, "A note must have a description"],
    trim: true,
    maxlength:[200,"Description cannot be more than 200 characters"]
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
