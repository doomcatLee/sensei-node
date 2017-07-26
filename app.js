var port = process.env.PORT || 3000;

var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
//Custom library
var sms = require('./public/js/sms.js');
var languageFilter = require('./public/js/language.js');

var translate = require('node-google-translate-skidz');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    console.log('index');
});

//PAGE FOR D3 Project
app.get('/d3', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/d3/index.html'));
});

app.post('/sendSMS', function(req, res) {
    var to = req.param('To');
    var body = req.param('Body');
    var language = req.param('Language');

    translate({
        text: body,
        source: 'es',
        target: languageFilter.filterLang(language)
    }, function(result) {
        console.log(result);
        sms.sendSMS(to, result.toString());
    });
});

app.listen(port);