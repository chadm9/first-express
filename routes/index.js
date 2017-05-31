var express = require('express');
var router = express.Router();

var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    var students = ['guido', 'others..'];
    res.render('index', { title: 'Express', studentsArray:students });
});

router.get('/test', function (req, res,next) {
    res.send('<h1>Router Check!</h1>');
});

//http get request
router.get('/weather', function (req, res) {
    var apikey = 'e312dbeb8840e51f92334498a261ca1d';
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
    request.get(weatherUrl, function (error, response, data) {
       console.log(data);
       //convert to JSON
       var weatherData = JSON.parse(data);
       //send weatherObject to weather.ejs
       res.render('weather', {weatherObject: weatherData});
       res.send('check console')
    });
});


module.exports = router;
