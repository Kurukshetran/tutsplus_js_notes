(function() {
	// Passing functions to other functions to perform work
	var calculator = { // highly modular because it's not up to the calculate
	// function to perform the calculation
		calculate: function(x, y, fn) {
			return fn(x, y);
		}
	};

	var sum = function(x, y) {
		return x + y;
	};

	var diff = function(x, y) {
		return x - y;
	};

	var sumResult = calculator.calculate(1, 2, sum),
		diffResult = calculator.calculate(1, 2, diff);

	console.log(sumResult);
	console.log(diffResult);

	// Arrays
	// The following methods only work in IE9 and up, Chrome, Safari, Firefox, Opera
	// JS does have a lot of flexibility, we can write code that adds these to the Array
	// data type in IE8 and below - polyfills/shims - add new features to old browsers
	// There are some libraries that are already out there
	var fruit = ["apples", "oranges", "bananas", "grapes", "oranges"];

	//indexOf() - starts at the beginning of an array and continues forward
	var index = fruit.indexOf("oranges"); // Starts at 0 and continues until it finds
	// "oranges"
	console.log(index); // Logs 1 

	//lastIndexOf() - starts at the end of an array and continues backward
	var lastIndex = fruit.lastIndexOf("oranges");
	console.log(lastIndex); // Logs 4

	////// ITERATIVE METHODS
	// Require a function to do the work it should do
	// Signature for callback function - function with particular set of parameters
	// Test to see if EVERY element in the array is a string
	function isString(value, index, array) {
		return typeof value === "string"
	}

	console.log(fruit.every(isString)); // Logs true

	// Test to see if EVERY element in the array is the length of 1
	function isLengthOfOne(value, index, array) {
		return value.length === 1;
	}

	console.log(fruit.every(isLengthOfOne)); // Logs false

	// Test to see if SOME elements in the array satisfy the condition
	function startsWithG(value, index, array) {
		return value[0] === "g";
	}

	console.log(fruit.some(startsWithG)); // Logs true

	// Create new array that passes the test.. FILTER
	function startsWithAB(value, index, array) {
		return value[0] === "a" || value[0] === "b";
	}

	var result = fruit.filter(startsWithAB);
	console.log(result);
	console.log(fruit);

	// Execute a function to every element in the array
	function doSomething(value, index, array) {
		console.log(value); // Logs each value of the array individually
	}
	fruit.forEach(doSomething);

	// Execute a function to every element within the array - create a new array
	function doSomething(value, index, array) {
		return "I like " + value;
	}
	var result = fruit.map(doSomething);
	console.log(result);
	console.log(fruit);

}());