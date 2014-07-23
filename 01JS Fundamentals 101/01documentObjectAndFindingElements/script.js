(function(){

var pElements = document.getElementsByTagName("p"), // NodeList - given by DOM API
// Live representation of what exists within the DOM - constantly updates the variable
	lastPElement = document.getElementById("foo");
	//alert(lastPElement);

var pElement = document.querySelector("p");
//alert(pElement.parentNode.tagName);

var pElement = document.querySelectorAll("p"); // getElementByTagName() is faster than querySelectorAll()
//alert(pElement.length);

var pElement = document.querySelectorAll("div p");
//alert(pElement.length);

var pElement = document.querySelector("#foo"); //getElementById() is faster than query selector
alert(pElement.parentNode.tagName);

for (var i = 0, len = pElements.length; i < len; i = i + 1) {
	//alert(pElements[i]);
}

//alert(pElements.length);
}());