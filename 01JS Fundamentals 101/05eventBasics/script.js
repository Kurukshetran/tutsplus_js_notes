(function(){

var el = document.getElementById("box");

// Below an event handler is set up - listens for an "on click" event
el.onclick = function() {
	// "this" keyword refers to the object the handler is on
	// "this" references the object an inner scope pertains to
	this.style.backgroundColor = "red";
};

var buttons = document.getElementsByTagName("button");
console.log(buttons);
for (var i = 0, len = buttons.length; i < len; i = i + 1) {
	buttons[i].onclick = function() {
		// alert("hello");
		var className = this.innerHTML.toLowerCase();
		document.body.className = className;
	};
}

// These are DOM level 0 event handlers - supported by all browsers
// There is a Standard and Legacy IE ways that are above level 0

// PROBLEM: These are volatile handlers - can't execute more than one function
// If more functions are created to execute for those event handlers, they will just
// Replace the previous handlers, they will NOT ADD TO the handler

// This overrides the event handler that occurred around line 14
buttons[i].onclick = function() {};

}());