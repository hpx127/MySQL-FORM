const connectedR = require("../connection/registerDB");

const bcrypt = require("bcryptjs");
// const crypto = require('crypto');
// const secret = "thisisharshitpatelpassword";

//....................INSERT DATA..................................//

exports.insertdata = async (req, res) => {
  var password = req.body.password;

  let sql =
    'INSERT INTO registertable(name,email,number,password) VALUES("' +
    req.body.name +
    '","' +
    req.body.email +
    '","' +
    req.body.number +
    '","' +
    req.body.password +
    '")';

  await connectedR.query(sql, (err, result) => {
    if (err) {
      console.log("Errore login: " + err);
    }
    res.json({ msg: "INSERTED DATA SUCCESFULLY.." });
  });
};

//.....................CHECK-DATA.................................//

exports.checkdata = async (req, res) => {
  var lemail = req.body.email;
  var lpassword = req.body.password;

  if (lemail && lpassword) {
    let sql = "SELECT * FROM registertable WHERE email= ? AND password = ?";

    connectedR.query(sql, [lemail, lpassword], (error, result) => {
      if (result.length > 0) {
        res.json({ msg: "login succesfully.." });
        res.end();
      } else {
        res.json({ error: "incorrect email and password" });
        res.end();
      }
    });
  } else {
    res.json({ error: "please enter username & password" });
    res.end();
  }
};

//....................GET-DATA......................................//

exports.getdata = async (req, res) => {
  let sql = "SELECT * FROM registertable";

  await connectedR.query(sql, (err, result) => {
    if (err) {
      console.log("Errore login: " + err);
    }
    console.log(result);
    res.json(result);
  });
};
