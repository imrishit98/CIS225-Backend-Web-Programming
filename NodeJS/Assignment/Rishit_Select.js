/**
 * Author: Rishit Patel
 * Date: Feb 12, 2020
 */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "imrishit",
    password: "Pa$$word@123",
    database: "cis255"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM students ORDER BY name", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});