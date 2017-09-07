var express=require("express");
var port=8081;
var app=express();
var http = require('http').Server(app);

app.get('/', function(req,res){
  res.sendFile(__dirname+'/blabla.html');
});
http.listen(port,function(){
  console.log('Listening on '+port);
});

app.get('/ajaxcall', function(req, res){
	var data = {
		contactId: 1,
		firstname: 'John',
		lastName: 'Doe',
		email: 'john.doe@domain.com',
		phone: '987654'
	};
	res.send(data);
});


//Setup for using static files (stylesheets, images, scripts etc.) from public directory
app.use(express.static('public'));
