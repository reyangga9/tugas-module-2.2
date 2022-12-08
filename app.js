var express = require("express");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(8080, function () {
  console.log("Listening on port 8080");
});
