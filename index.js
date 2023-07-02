const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
  console.log("file location: " + __dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var sum = num1 + num2;
  res.send("Answer: " + sum);
});
