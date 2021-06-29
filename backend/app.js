const express = require("express");
const morgan = require("morgan");

const noteRouter = require("./routes/noteRouter");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json()); //Alternative of body parser

//To display time in console
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes

app.use("/api/v1/note", noteRouter);

module.exports = app;
