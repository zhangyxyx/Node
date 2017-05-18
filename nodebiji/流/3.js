var fs=require('fs');
var rs=fs.createReadStream('1.txt');
var ws=fs.createWriteStream('2.txt');
rs.pipe(ws);