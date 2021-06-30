const express = require("express");
const morgan = require("morgan");

const noteRouter = require("./routes/noteRouter");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");

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

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
