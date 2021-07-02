const Note = require("../models/noteModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getNotes = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Note.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const notes = await features.query;

  res.status(200).json({
    status: "success",
    results: notes.length,
    data: { notes },
  });
});

exports.getNote = catchAsync(async (req, res, next) => {
  const note = await Note.findById(req.params.id);

  if (!note) return next(new AppError(`No tour found for this ID`, 404));

  res.status(200).json({ status: "success", data: note });
});

exports.createNote = catchAsync(async (req, res, next) => {
  const newNote = await Note.create(req.body);

  res.status(201).json({ status: "success", data: { newNote } });
});

exports.editNote = catchAsync(async (req, res, next) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });

  if (!note) return next(new AppError(`No tour found for this ID`, 404));

  res.status(200).json({ status: "success", data: note });
});

exports.deleteNote = catchAsync(async (req, res, next) => {
  note = await Note.findByIdAndDelete(req.params.id || req.params.name);

  if (!note) return next(new AppError(`No tour found for this ID`, 404));

  res.status(204).json({ status: "success", message: "Successfully Deleted" });
});
