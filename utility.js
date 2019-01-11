const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const dateTimeHelper = require('lib/helpers/dateTimeHelper');
const currencyHelper = require('lib/helpers/currencyHelper');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/addNote', function(request,response){
    var filePath = __dirname + '/data/' + 'notes.json';
    fs.readFile(filePath,'utf8',function(error, data){
        if(error){
            return console.log('file reading error ' + filePath + error);
        }

        var notes = [];
        if(data){
            notes = JSON.parse(data);
        }

        notes.push(request.body);
        fs.writeFile(filePath,JSON.stringify(notes),'utf8',function(error){
            if(error){
                return console.log('file writing error' + filePath + error);
            }
        })
        response.sendStatus(200);
    })
});

app.get('/allNotes', function(request,response){
    var filePath = __dirname + '/data/' + 'notes.json';
    fs.readFile(filePath,'utf8',function(error, data){
        if(error){
            return console.log('file reading error ' + filePath + error);
        }

        var notes = [];
        if(data){
            notes = JSON.parse(data);
        }

        response.send(notes);
    })
});

var listener = app.listen(8090, function(){
    var host = listener.address().address;
    var port = listener.address().port;

    const currentDateTime = dateTimeHelper.currentDateTime();

    console.log('App started at %s weekday %s', currentDateTime, dateTimeHelper.getWeekdayForDate(currentDateTime));
    console.log('App started at %sth day UTC', dateTimeHelper.getCurrentWeekday(0));
    console.log('App listening at http://%s:%s', host, port);
    console.log('Testing currencyHelper %s %s', currencyHelper.round(5.5, 0), currencyHelper.convertFromDollarsToCents('123'));
});