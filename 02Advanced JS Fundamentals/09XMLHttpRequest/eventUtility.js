// Function that sets event handlers regardless of what browser is being used

// el - HTML DOM Object
// type - Event Type (click, keydown etc)
// fn - function that will occur when event occurs
var eventUtility = {
	
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

	getTarget : function(e) {
		if ( typeof event.target !== "undefined" ) {
			return event.target;
		} else {
			return event.srcElement;
		}
	},

	preventDefault : function(event) {
		if ( typeof event.preventDefault !== "undefined" ) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	getCharCode : function(e) {
		if ( typeof e.charCode === "number" ) {
			return e.charCode;
		} else {
			return e.keyCode;
		}
	}

};

// However.... these functions are now GLOBAL
// That's actually okay though because this is something we want to do across all
// browsers all the time
// But lets put them into an eventUtility object using object literal notation
// SEE ABOVE!!