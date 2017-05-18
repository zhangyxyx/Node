var fs=require('fs');
var data='logo.png';
fs.writeFile('1.txt',data,function(err){
	if(err){
		console.log(err)
	}else{
		console.log('成功');
	}
})