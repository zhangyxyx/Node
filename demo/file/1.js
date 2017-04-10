var fs=require('fs');
fs.readFile('input.txt',function(err,data){
	if(err){
		return console.log(err)
	}
	console.log('异步读取'+data.toString());

});

var data=fs.readFileSync('input.txt');
console.log("同步读取："+data.toString());
console.log("程序执行完毕")
