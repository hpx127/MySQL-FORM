const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;

var register = require("./routing/register");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/"));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/registration", register);
app.use("/login", register);
app.use("/table", register);

//..................server start...................................//

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
