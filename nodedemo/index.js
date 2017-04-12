var server=require('./server');
//将路由函数可以被注入服务器中
var router=require("./router");
var requestHandlers=require('./requestHandlers');

//handle是一些请求处理程序的集合
var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;


server.start(router.route,handle);