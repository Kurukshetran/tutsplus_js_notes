(function(){

var buttons = document.getElementsByTagName("button");

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
	buttons[i].addEventListener("click", function(event){
		var className = this.innerHTML.toLowerCase();
		
		console.log(event.type); // logs "click"
		console.log(event.target); // logs the element - alrready available from "this"

		event.preventDefault(); // prevents the default action for the event

		document.body.className = className;
	}, false);
}

}());