const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A note must have a name"],
    trim: true,
    maxlength: [10, "A note must have less or equal to 10 characters"],
  },

  description: {
    type: String,
    required: [true, "A note must have a description"],
    trim: true,
    maxlength: [100, "A note must have less or equal to 100 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
