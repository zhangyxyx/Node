var fs=require("fs");
fs.stat('1.txt',function(err,stat){
	if(err){
		console.log(err)
	}else{
		console.log(stat)
	}
})