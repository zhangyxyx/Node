var fs=require('fs');
var readerStream=fs.createReadStream('input.txt');
var writeStream=fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

console.log('程序运行完毕')