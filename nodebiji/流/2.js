var fs=require('fs');
var ws1=fs.createWriteStream('1.txt','utf-8');
ws1.write('使用stream');
ws1.write('end');
ws1.end();