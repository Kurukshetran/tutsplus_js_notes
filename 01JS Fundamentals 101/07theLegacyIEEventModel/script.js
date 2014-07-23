(function(){

var buttons = document.getElementsByTagName("a");

var buttonClick = function(e) {
		// Legacy Mode Code
		//event.srcElement // gives same information as "this"
		var className = event.srcElement.innerHTML.toLowerCase();
		
		event.returnValue = false; // same as e.preventDefault();

		document.body.className = className;
};

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
	
	buttons[i].attachEvent("onclick", buttonClick);

	// removeAddListener
	buttons[i].detachEvent("onclick", buttonClick);
}

}());