var http=require('http');
var querystring=require('querystring');

var postHTML='<html><head><meta charset="urf-8"><title>菜鸟教程</title></head>'+
'<body>'+
'<form method="post">网站名：<input name="name"><br>'+
'网站<input name="url"><br>'+
'<input type="sunmit">'+
'</form>'+
'</html>';

http.createServer(function(req,res){
	var bosy="";
	req.on('data',function(chunk){
		body+=chunk
	});
	req.on('end',function(){
		body=queststring.parse(body);
		res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		if(body.name&&body.url){
			res.write("网站名"+body.name);
			res.write("<br>");
			res.write("网站"+body.url);
		}else{
			res.write(postHTML);
		}
		res.end();
	});
}).listen(3000);