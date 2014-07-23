(function(){

var mouseHandler = function(e) {
	var target = eventUtility.getTarget(e),
		classData = target.getAttribute("data-body-class");

	if ( classData ) {
		eventUtility.preventDefault(e);

		if (e.type === "click" ) {
			document.body.className = "";
		} else {
			document.body.className = classData;
		}
	}
};

eventUtility.addEvent(document, "click", mouseHandler);
eventUtility.addEvent(document, "mouseover", mouseHandler);

/* var buttons = document.getElementsByTagName("a");

var buttonClick = function(e) {
	var target = eventUtility.getTarget(e),
		className = target.innerHTML.toLowerCase();

	eventUtility.preventDefault(e);

	document.body.className = className;
};

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
	eventUtility.addEvent(buttons[i], "click", buttonClick);
	//removeEvent(buttons[i], "click", buttonClick);
} */
}());