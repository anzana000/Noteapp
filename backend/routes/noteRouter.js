const express = require("express");
const noteController = require("../controller/noteController");

const router = express.Router();

router.route("/").get(noteController.getNotes).post(noteController.createNote);

router
  .route("/:id")
  .get(noteController.getNote)
  .patch(noteController.editNote)
  .delete(noteController.deleteNote);

module.exports = router;
