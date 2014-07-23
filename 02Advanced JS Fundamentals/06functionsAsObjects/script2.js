(function(){
	// We can actually call the doSomething method from foo or bar...
	var obj = {
		name: 'obj object',
		doSomething: function(x, y) {
			alert(this.name + " " + x + " " + y);
		}
	};

	var foo = {
		name: 'foo object'
	};

	var bar = {
		name: 'bar object'
	};

	obj.doSomething // alerts 'obj object'

	// apply() method calls external functions in the context of other object
	obj.doSomething.apply(foo); // alerts 'foo object'
	obj.doSomething.apply(bar); // alerts 'bar object'
	// Optional second parameter for apply - array of arguments to pass
	// to doSomething function...
	obj.doSomething.apply(foo, [1, 4]) // alerts 'foo object 1 4'


	// call() method does the same thing - except arguments are slightly different
	obj.doSomething.call(foo); // alerts 'foo object'
	// instead of an array for second parameter like apply - it just takes the
	// parameters for doSomething in order - see below
	obj.doSomething.call(foo, 1, 4) // alerts 'foo object 1 4'
}());