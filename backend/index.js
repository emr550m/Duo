

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res){
    var response = {
        errorMessage: 'There is no such route.'
    }
    res.json(req.body);
  });


app.post('/login', function(req, res){
    var response = {
        errorMessage: req.body,
        success: (req.body.username == "testUsername" && req.body.password=="testPassword"?true:false)
    }
    res.json(response);
  });


app.listen(3005);