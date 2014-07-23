(function(){

var speed = 10;
	moveBox = function(moveBy) {
		var box = document.getElementById("box");
			left = box.offsetLeft; // gets the left position of the element
			// in relation to it's next position ancestor
			// Other Examples: offsetTop, offsetRight, offsetBottom

		if ( (moveBy > 0 && left > 399) || (moveBy < 0 && left < 50) ) {
			clearInterval(timer);
			timer = setInterval(function() { moveBox(moveBy * -1 ); }, speed);
		}

		box.style.left = left + moveBy + "px";
	};

var timer = setInterval(function() { moveBox(3); }, speed);
}());