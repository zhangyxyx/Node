var events=require('events');
var eventEmitter = new events.EventEmitter();
//监听
var listener1=function listener1(){
	console.log('监听器listener1')
};
//监听2
var listener2=function listener2(){
	console.log('监听器2')
};
//绑定connection事件 处理listener1
eventEmitter.addListener('connection',listener1);
//处理事件函数2
eventEmitter.on('connection',listener2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"个监听器监听链接事件");

//处理connection事件
eventEmitter.emit('connection');

//移除绑定的listeners事件
eventEmitter.removeListener('connection',listener1);
console.log('listener1不再受到监听');

//触发连接事件
eventEmitter.emit('connection');

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"个监听器监听连接事件");

console.log('程序执行完毕')
