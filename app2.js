var request = require ('request');
var express = require ('express');
var bodyParser = require ('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded((extended:true)));
var path= require ("path");
var server = require('http').createServer(app);

app.post('/webhook',function(req,res) {
  console.log('Received a post request');
  if (!req.body) return res.sendStatus(400) res.setHeader('Content-Type','application/json');
  console.log('Here is the request from DialogFlow');
  console.log(req.body);
    var city = req.body.queryResult.parameters['geo-city'];
    var w = getWeather(city);
    let response = " ";
    let responseObj = {
      fullfilmentText : response
      ,fullfilmentMessages : [{"text": {"text": [w]}}]
      ,"source":""
    }
  console.log("Here is the response to dialogbox");
  console.log(responseObj);
  return res.json(responseObj);
})

vap apiKey ="c8db7d3c494184411e3721de2125950a";
var result

function cb (err,response,body){
  if (err){
    console.log("error:", error);
  }
  var weather = JSON.parse(body)
  if (weather.message == 'city not found'){
    result = "Unable to get 
  }
