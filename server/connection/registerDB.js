const mysql = require("mysql");

const connectedR = mysql.createConnection({
  host: "your locahost name ",
  user: "user name ",
  password: "your user passworsd",
  database: "your database name",
});

connectedR.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("connected with mysql database");
  }
});

module.exports = connectedR;
