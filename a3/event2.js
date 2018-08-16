var EventEmitter = require('events').EventEmitter;


var util = require('util');


var person = function (name){
	this.name = name ;
}

util.inherits (person, EventEmitter);

var joe = new person(" kate loge");

joe.on('speak',function (words){
	console.log(this.name+ ' : '+ words);

	console.log('${this.name} : ${words}');

});


joe.emit('speak','i love programming');


