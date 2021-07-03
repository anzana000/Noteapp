const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A note must have a name"],
    trim: true,
  },

  description: {
    type: String,
    required: [true, "A note must have a description"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
