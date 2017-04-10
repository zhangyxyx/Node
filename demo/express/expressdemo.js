var express=require('express');
var app=express();
app.set('/',function(req,res){
	res.send('Hellow world');
})
var server=app.listen(8081,function(){
	var host=server.address().address
	var post=server.address().post

	console.log('应用实例访问地址为http://%s:%s',host,post)
})