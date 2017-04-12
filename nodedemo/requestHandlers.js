var queststring=require('querystring'),
	fs=require('fs'),
	formidable=require('formidable');
//既简单又实用的非阻塞操作
function start(response){
	console.log("Request heandlers 'start' was called");
	
	var body='<html>'+
	'<head>'+
	'<meta http-equive="Content-Type" content="text/html" charset=utf-8>'+
	'</head>'+
	'<body>'+
	'<form action="/upload" enctype="multipart/form-data" method="post">'+
	'<input type="file" name="upload">'+
	'<input type="submit" value="Upload file"/>'+
	'</form>'+
	'</body>'+	
	'</html>';
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(body);
	response.end();
	
}
function upload(response,request){
	console.log("Request heandlers 'upload' was called");

	var form = new formidable.IncomingForm();
	console.log("about to pasrse");
	form.parse(request,function(error,fields,files){
		console.log("parsing done");
		console.log(files.upload);
		fs.renameSync(files.path,"/tmp/1.png");
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("received image<br>");
		response.write("<img src='/show'/>");
		response.end();
	})
	
}

function show(response){
	console.log("Request hendler 'show' was called");
	fs.readFile("./tmp/1.png","binary",function(error,file){
		if(error){
			response.writeHead(500,{'Content-Type':'text.plain'});
			response.write(error+"\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"text/plain"});
			response.write(file,'binary');
			response.end();
		}
	});
}
exports.start=start;
exports.upload=upload;
exports.show=show