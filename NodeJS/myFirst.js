/**
 * Author: Rishit Patel
 * Date: Feb 12, 2020
 */
var http = require('http');
var uc = require('upper-case');
var dt = require('myfirstmodule');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("Hello World!"));
    res.write("<br>" + "The date and time are currently: " + dt.myDateTime());
    res.write("<br>" + "The current url: " + req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write("<br>" + "The query string: " + txt);
    res.end();
}).listen(8080);