var express=require('express');
var url=require('url');
//nodejs的模块加载方法，直接调用require即可，路由处理全部放在核心公共类目录的routes.js中
var routes=require('./core/routes.js');
var app=express();
app.listen(80,'127.0.0.8');
app.set('view engine','ejs');
//将全部的请求交给路由去处理
routes(app,url);