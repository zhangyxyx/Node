const buf1=Buffer.alloc(10);
const buf2=Buffer.alloc(10,1);

const buf3=Buffer.allocUnsafe(10);
const buf4=Buffer.from([1,2,3]);
const buf5=Buffer.from("test");
const buf6=Buffer.from('test','utf8');

console.log(buf6.toString());