const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit: 10000,
    host: "127.0.0.1",       //This is your localhost IP
    user: "sdp-user",         // "newuser" created in Step 1(e)
    password: "FakePass1234",  // password for the new user
    database: "user-info",      // Database name
    port: "3306"             // port name, "3306" by default
  })


module.exports = connection