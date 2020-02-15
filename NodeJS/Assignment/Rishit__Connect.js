/**
 * Author: Rishit Patel
 * Date: Feb 12, 2020
 */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "imrishit",
    password: "Pa$$word@123"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE cis255", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});