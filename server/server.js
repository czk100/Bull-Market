const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const announcements = require("./routes/api/announcements");
const editTexts = require("./routes/api/editTexts");
const questions = require("./routes/api/questions");
const uploads = require("./routes/api/uploads");
const uploadNames = require("./routes/api/uploadNames");
const ExecBoard = require('./routes/api/execBoard');

const app = express();

// CORS config
app.use(cors());

// Bodyparser middleware
app.use(bodyParser.json({limit: '50mb'}));


//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .set("useNewUrlParser", true)
  .set("useUnifiedTopology", true)
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));


var connection = mongoose.connection;
connection.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "uploads"
  });
});

app.use("/api/announcements", announcements);
app.use("/api/editTexts", editTexts);
app.use("/api/questions", questions);
app.use("/api/uploads", uploads);
app.use("/api/uploadNames", uploadNames);
app.use('/api/execBoard', ExecBoard);

//port configuration
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
