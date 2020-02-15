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
    console.log("Connected!");
    var sql = "INSERT INTO students (name, course) VALUES ?";
    var values = [
        ['John Doe', 'Web Programming'],
        ['Chini Yang', 'Java Programming'],
        ['Vehy Patel', 'Intro to C'],
        ['Ali Khan', 'Python Basics'],
        ['Alisha Rode', 'Bootstrap'],
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});