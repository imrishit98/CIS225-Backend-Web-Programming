/**
 * Author: Rishit Patel
 * Date: Feb 12, 2020
 */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "imrishit",
    password: "Pa$$word@123",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        //console.log(result[2].address);
        //console.log(fields);
        console.log(fields[0].name);
    });
});
