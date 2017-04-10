var fs=require('fs');
var data='菜鸟教程官网：www.baidu.com';

var writeStream=fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
	console.log('写入成功')
});
writeStream.on('error',function(){
	console.log('err.stack')
});
console.log('程序执行完毕')


