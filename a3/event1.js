var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customerE',function (mess,title){

	console.log('${title}:${mess}');
	console.log(title +' : '+mess);
})

emitter.emit('customerE','hi just a new tries her','yooooo!')