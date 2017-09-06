var express=require("express");
var port=8081;
var app=express();
var http = require('http').Server(app);

app.get('/', function(req,res){
  res.sendFile(__dirname+'/index.html');
});
http.listen(port,function(){
  console.log('Listening on '+port);
});
