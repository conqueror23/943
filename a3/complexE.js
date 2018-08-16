class EventEmitter {
	constructor (){
	this.events = {};
	}

	on (eventname,callback){
		if(this.events[eventname]){
			this.events[eventname].push(callback);
		}else{
			this.events[eventname] = [callback];
		};

	trigger (eventname,...rest){
		if (this.events[eventname]){
			this.events[eventname].foreach(cb =>
				cb.apply(null,rest));
			};

		}

	}
}


const ee = new EventEmitter();
ee.on('chage',()=>{
	console.log('hello this has been triggered');
})


ee.trigger('change');