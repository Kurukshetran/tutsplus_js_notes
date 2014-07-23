(function(){
	doSomething(); // The declaration was hoisted so this runs fine
	doSomethingElse(); // returns an error of undefined because the function
	// not yet stored in memory

	// The following function is hoisted up upon load time
	// Makes it perfectly fine to call the function before it is defined
	function doSomething() {
		alert("Hello Function Declaration");
	}

	// This function does not get hoisted because it is declared as a variable
	// in terms of an expression
	var doSomethingElse = function(){
		alert("Hello Function Expression");
	};

	// Arguments
	argumentExample("hello, world!");
	function argumentExample() {
		var length = arguments.length;
		alert(length); // returns arguments length - 1
		alert(arguments[0]); // returns was is at arguments index 0 - "hello, world!"
		alert(arguments.callee); // returns a reference of the function being executed
		// it's a good idea to use this for recursion instead of calling the function
		// itself - so we are free to change the name of the function in the future and 
		// our code won't break
		// arguments.callee(); // calls the function
	}

	// Example of a closure
	function doSomething(arg1) {
		// A closure can be around a parameter, variable, function...
		return function() { // This is the CLOSURE - closes around arg1 parameter
			alert(arg1);
		};
		// Anything that is defined in the doSomething function - and then
		// referenced by the returning anonymous function, a closure is created
	}

	// Because we are assigning the doSomething function to a variable - we are
	// keeping the doSomething code in memory
	// keeps anything else we define in doSomething in memory as well
	var fn = doSomething("hello, closure"); // 1st execution context
	var fn2 = doSomething("hello, closure 2"); // 2nd execution context

	// Free up memory
	// fn = null;

	// Execution context - defines where the memory is stored for that function
	fn();
	fn2();
	fn();

	// The more contexts we use.... the more memory gets used up

	// Practical example of a closure - making a module without having to worry
	// about inner working of code breaking
	// Unique ID generator

	// Possibility of naming conflicts so... we need to isolate the code somehow
	// Wrap it in an immediately invoked function
	// But... now we can't access the scope of that function
	// So creating a utility object would be a good solution - make name unique
	var utility = (function(){
		var i = 0;

		return {
			nameGen : function() {
				var name = "customName" + i;
				i = i + 1;
				return name;
			}
		}
	}());
	var name = utility.nameGen(),
		name2 = utility.nameGen();

	alert(name + " " + name2);

}());