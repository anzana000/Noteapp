const express = require("express");
const noteController = require("../controller/noteController");

const router = express.Router();

router.route("/").get(noteController.getNotes).post(noteController.createNote);

router
  .route("/:id")
  .patch(noteController.editNote)
  .delete(noteController.deleteNote);

module.exports = router;
