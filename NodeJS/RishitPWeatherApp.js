/**
 * Author: Rishit Patel
 * Date: Mar 04, 2020
 */

let request = require('request');
let apiKey = '4d12d562a78d4d0066b55b6fce9066b5';
let city;
let appurl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;
let url = require('url');
let express = require('express');
let app = express();

app.get('/temp', function (req, res) {
    res.send('Weather app is running');
    query = url.parse(req.url, true).query;
    city = query.city;
    appurl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;
    request(appurl, function (err, res, body) {
        if (err) {
            console.log('error:', err);
        } else {
            let weather = JSON.parse(body)
            let message = 'It is ' + weather.main.temp + ' degrees in ' + weather.name + ',' + '!' + 'but it feels like ' + weather.main.feels_like + ' degrees!';
            console.log(message);

        }
    })

});

app.get('/weather', function (req, res) {
    query = url.parse(req.url, true).query;
    city = query.city;
    appurl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;
    request(appurl, function (err, response, body) {
        if (err) {
            console.log('error:', err);
        } else {
            let message = '';
            let weather = JSON.parse(body)
            let unixTimeStamp = weather.sys.sunset;
            date = new Date(unixTimeStamp * 1000);
            formatted = date.toLocaleTimeString();
            //var d = new Date();
            //var currentTime = d.toLocaleTimeString();
            let consoleMsg = 'It is ' + weather.main.temp + ' degrees in ' + weather.name + ',' + weather.sys.country + '!' + 'but it feels like ' + weather.main.feels_like + ' degrees! \n';
            consoleMsg += 'The description is ' + weather.weather[0].description;
            message += '<div class="container">';
            message += '<img src="http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png" /></br>';
            //message += '<span class="smallTxt">Current Local Time: ' + currentTime + '<br /></span>';
            message += '<span class="bigTxt">It is <b>' + weather.main.temp + '</b>°C in ' + weather.name + ',' + weather.sys.country + '!' + ' But it feels like <b>' + weather.main.feels_like + '</b>°C!</span><br />';
            message += 'Min temprature: <b id="minTmp">' + weather.main.temp_min + '°C</b> <br /> Max temprature: <b id="maxTmp">' + weather.main.temp_max + '°C</b><br />';
            message += 'The description is <b>' + weather.weather[0].description + '</b><br />';
            message += 'Sunset: ' + formatted;
            message += '</div>';

            message += '<style>' +
                '@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");' +
                'html{font-size: 24px; font-family: "Roboto", sans-serif;} b{ color: #2856C9;} img{ height: 100px; }' +
                '#minTmp{color: #062470;} #maxTmp{color: #B40404;} .smallTxt{font-size: 12px;}' +
                '.container{ text-align: center; } .bigTxt{ font-size: 36px; }'
                + '</style>';
            console.log(consoleMsg);
            //console.log(weather);
            res.send(message);
        }
    })

});

app.listen(3000, function () {
    console.log('Weather app listening on port 3000!');
});

