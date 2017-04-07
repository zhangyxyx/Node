//这是阻塞加载
var fs=require("fs");
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log('程序已经执行结束了！')