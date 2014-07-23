(function(){

var buttons = document.getElementsByTagName("button");
var buttonClick = function() {
		var className = this.innerHTML.toLowerCase();
		document.body.className = className;
	};

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
	//DOM LEVEL ZERO EVENT HANDLER
	/*buttons[i].onclick = function() {
		var className = this.innerHTML.toLowerCase();
		document.body.className = className;
	};*/

	//STANDARD EVENT MODEL
	buttons[i].addEventListener("click", buttonClick, false);
	buttons[i].addEventListener("click", function() { alert("Hi"); }, false);

	// Remove the event handler after it has been specified
	// The exact same information needs to be specified in the arguments to remove the listener
	// This is why we created the "buttonClick" function - because we must provide
	// the exact same function object
	buttons[i].removeEventListener("click", buttonClick, false);

	// The below code will not work because the anonymous function is considered
	// A reference to a brand new object even though it's the same code
	buttons[i].removeEventListener("click", function() { alert("Hi"); }, false);
}

}());