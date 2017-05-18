var fs=require('fs');
var fs=fs.createReadStream('1.txt','utf-8');
fs.on('data',function(chunk){
	console.log('data'+chunk)
});
fs.on('end',function(){
	console.log('end')
});
fs.on('error',function(err){
	console.log('error'+err)
})