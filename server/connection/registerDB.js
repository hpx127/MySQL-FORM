const mysql = require('mysql')


const connectedR = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"userdatabase"
});

connectedR.connect((error)=>{
    if(error)
    {
          throw error;
    }
    else{
        console.log("connected with mysql database");
    }
})

module.exports = connectedR