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
propertyDeco = function(target: Object, name: string | symbol): any {
	console.log(target, name)
	let t2 = "I'm PropertyDecorator";
	let descriptor = {
		get: undefined,
		set: undefined,
		enumerable: true,
		configurable: true
	};
	descriptor.get = function() { return t2 };
	descriptor.set = function(val) { t2 = val };
	target[name] = t2;
	target['_extraId'] = '1111111';
	// Object.defineProperty(target, name, descriptor);
	// return descriptor;
}