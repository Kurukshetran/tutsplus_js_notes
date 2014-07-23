// Function that sets event handlers regardless of what browser is being used

// el - HTML DOM Object
// type - Event Type (click, keydown etc)
// fn - function that will occur when event occurs
var eventUtility = {
	
	// Sets handlers regardless of what browser is being used.
	addEvent : function(el, type, fn) {
		// We want to test for Standards Compliance FIRST!!
		if ( typeof addEventListener !== "undefined" ) {
			el.addEventListener(type, fn, false);
		} else if ( typeof attachEvent !== "undefined" ) {
			el.attachEvent("on" + type, fn);
		} else {
			el["on" + type] = fn;
		}
	},

	// Removes handlers regardless of what browser is being used.
	removeEvent : function(el, type, fn) {
		// We want to test for Standards Compliance FIRST!!
		if ( typeof removeEventListener !== "undefined" ) {
			el.removeEventListener(type, fn, false);
		} else if ( typeof attachEvent !== "undefined" ) {
			el.detachEvent("on" + type, fn);
		} else {
			el["on" + type] = null;
		}
	},

	// Get target of the event
	getTarget : function(event) {
		if ( typeof event.target !== "undefined" ) {
			return event.target;
		} else {
			return event.srcElement;
		}
	},

	// Prevent default action from occuring
	preventDefault : function(event) {
		if ( typeof event.preventDefault !== "undefined" ) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}

};

// However.... these functions are now GLOBAL - we do want to limit our impact
// on the GLOBAL scope
// That's actually okay though because this is something we want to do across all
// browsers all the time

// But lets put them into an eventUtility object using object literal notation
// SEE ABOVE!!