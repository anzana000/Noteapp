const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./app");

const DB =
  "mongodb+srv://learn-n-share:learn-n-share@cluster0.omebf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection established 😎"));

// START SERVER

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
