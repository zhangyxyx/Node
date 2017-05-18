var http=require('http');
//创建http 并传入回调函数
var server=http.createServer(function(request,response){
	//回调函数接收到request response
	//获取http请求的method 和url
	console.log(request.method+":"+request.url);
	//将http响应写入response 同时设置Content-type:text/html
	response.writeHead(200,{'Content-Type':'text/html'});
	//将http响应的html内容写入response
	response.end('<h1>hello</h1>')
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/')