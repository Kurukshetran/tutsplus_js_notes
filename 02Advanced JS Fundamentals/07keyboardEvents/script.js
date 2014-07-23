(function(){
	var txtbox = document.getElementById("txtInput");

	eventUtility.addEvent(txtbox, "keypress",
		function(e) {
			var code = eventUtility.getCharCode(e);

			// we can perform filters or limits on what keys can be entered into a 
			// textfield - limit to alphabetic characters
			if ( (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ) {
			} else {
				eventUtility.preventDefault(e); // accept everything accept alphabetic characters
				// place the preventDefault it in if statement
			}
			alert(code);
		});

	// Apply same understanding to the "keyup" event
	eventUtility.addEvent(document, "keydown", 
		function(e){
			var code = e.keyCode, // No need for getCharCode - works in every browser
			// Returns 65-90 regardless of the case of the letter
			// This is because it gives us access to the modifier keys
			altKey = e.altKey, // returns true or false
			ctrlKey = e.ctrlKey, // returns true or false
			shiftKey = e.shiftKey; // returns true or false

			if (ctrlKey && code === 66 /*B or b*/) {// if ctrl + b
				alert("You pressed ctrl + B");
			}
		});
}());