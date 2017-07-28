var buffer1=new Buffer('菜鸟');
var buffer2=new Buffer('www.baidu.com');
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log("buffer3的内容"+buffer3.toString())
