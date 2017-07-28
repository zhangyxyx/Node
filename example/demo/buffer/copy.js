var buffer1=new Buffer('ANC');
var buffer2=new Buffer(2);
buffer1.copy(buffer2);
console.log(buffer2.toString());