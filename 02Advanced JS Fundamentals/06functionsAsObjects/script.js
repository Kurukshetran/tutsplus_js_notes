(function(){

	// Modular programming approach to calculator
	// calculate() facilitates whatever function performs the calculation
	// This design actually isn't the best because it's not very flexible
	// Can't add multiple parameters - try adding 2 + 5 + 6...
	// We can use the 'arguments' object
	var calculate = function(x, y, fn) {
		return fn(x, y);
	};

	var sum = function(x, y) {
		return x + y;
	};

	var diff = function(x, y) {
		return x - y;
	};

	var sumResult = calculate(1, 2, sum),
		diffResult = calculate(1, 2, diff);

	console.log(diffResult);
	/////////////////////////////////////////////

	var calculate = function() {
		// Bring the pop() method from Array prototype into
		// the arguments
		var fn = arguments.pop(); // However... arguments is not an array so 
		// an error will occur
		// apply or call must be used
		var fn = Array.prototype.pop.apply(arguments);
		// calling fn can't no longer have parameters - can pass 'arguments' because
		// sum and diff currently use parameters and expect them
		// take advantage of apply's second parameter
		// Parameter 1) Null - we don't want to pass fn as a function of another object
		// Parameter 2) Arguments Object - not array but... array like object
		return fn.apply(null, arguments);
	};
	var sum = function() {
		var total = 0
		for (var i = 0, l = arguments.length; i < l; i = i + 1) {
			total = total + arguments[i];
		}
		return total;
	};

	var diff = function() {
		var total = Array.prototype.shift.apply(arguments); // Shift takes the
		// first value of an array - removes it and assigns it to a variable
		for (var i = 0, l = arguments.length; i < l; i = i + 1) {
			total = total - arguments[i];
		}
		return total;
	};

	var sumResult = calculate(1, 2, 3, 4, 5, sum),
		diffResult = calculate(1, 2, 3, 4, 5, diff);

	console.log(diffResult);
}());