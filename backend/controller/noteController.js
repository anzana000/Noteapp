const Note = require("../models/noteModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getNotes = async (req, res) => {
  try {
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const tours = await features.query;

    res.status(200).json({
      status: "success",
      results: notes.length,
      data: { notes },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.createNote = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);

    res.status(201).json({ status: "success", data: { newNote } });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.editNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
    });

    res.status(200).json({ status: "success", data: note });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    note = await Note.findByIdAndDelete(req.params.id || req.params.name);

    res
      .status(204)
      .json({ status: "success", message: "Successfully Deleted" });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};
