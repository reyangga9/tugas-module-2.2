var express = require("express");
var indexRouter = require("./routes/index");
var songsRouter = require("./routes/songs");
var app = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/songs", songsRouter);

app.listen(8080, function () {
  console.log("Listening on port 8080");
});
