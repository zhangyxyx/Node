process.nextTick(function(){
	console.log('nextTick callback')
});
console.log('nextTick was set');
process.on('exit',function(code){
	console.log('about')
})