function route(handle,pathname,response,request){
	console.log("About to route a request for"+pathname);
	if(typeof handle[pathname]==="function"){
		handle[pathname](response,request);
	}else{
		console.log("No request handler found for"+pathname);
		response.writeHead(404,{"Content-Type":"text/html"});
		response.write("404 Not found");
		response.end();
	}
}
exports.route=route
//相比较之前 从请求中处理程序中获取返回值，这次取而代之的是直接传递response对象