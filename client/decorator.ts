export let classDeco: ClassDecorator;
classDeco = function(target: Function): Function {
	function next() {
		this.t1 = 'sdfsdf';
		target.call(this);
	}
	next.prototype = Object.create(target.prototype);
	next.prototype.constructor = next;
	next.prototype.name = function() {
		console.log("buton clicked");
	}

	return next;
}


export let propertyDeco: PropertyDecorator;
propertyDeco = function(target: Object, name: string | symbol, descriptor?: PropertyDescriptor): any {
	let t2 = "I'm PropertyDecorator";
	descriptor.get = function() { return t2 };
	descriptor.set = function(val) { t2 = val };
	delete descriptor.value;
	delete descriptor.writable;
	console.log(name, descriptor)
	// return descriptor;
}