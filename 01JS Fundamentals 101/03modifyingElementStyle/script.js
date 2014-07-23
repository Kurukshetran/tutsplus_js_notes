(function() {

// ***** CHANGING STYLE ****** //

// Directly mapping to the html tag's "style" attribute
// Attempting to find styles within an external Style Sheet does not work
// Not very inefficient because we have to access the DOM multiple times
var divFoo = document.getElementById("foo"),
	style = divFoo.style;

style.color = "blue";
style.border = "1px solid black";
// Generally is CSS hyphens are replaced with CamelCase in JS
style.backgroundColor = "#ffff00";
style.padding = "2px";

// alert(style.color);

// *************************** //

// ********** Adding a Class via JS *********** //
divFoo.className = "css-class";

// Setting multiple classes
divFoo.className = "css-class css-class2";

// Remove all classes
divFoo.className.replace("");

// However, what if you wanted to remove one class from a set of classes
// On a single element?

// Here is a trick to do so, put spaces before and after class name
// This way we replace the existing class we want to remove with an empty string
divFoo.className = " css-class  css-class2 ";
divFoo.className = divFoo.className.replace(" css-class2 ", "");

// Here is a more elegant solution, however.... it is not available on all browsers
// classList is not supported by IE
// This actually accesses the DOM twice so we use the previous method to set classes
divFoo.classList.add("css-class");
divFoo.classList.add("css-class2");

// More elegant solution
divFoo.className = "css-class css-class2";
divFoo.classList.remove("css-class");

// Toggling CSS classes
divFoo.classList.toggle("css-class");
divFoo.classList.toggle("css-class");
// *************************************** //


// ************** For Standard Spaced Browsers ******** //
// ** Firefox, Chrome, Safari, IE 9 and above, Opera ** //

// Use a method called "getComputedStyle()" - of window object
// The window object gets explicitly used too...

//Two arguments -- 	1) Element to retrieve style info of
// 					2) String specifying pseudo element to match
// 						Generally gets set to "null" because it's not supported
//						by all browsers - then another method "getPropertyValue"
var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");
//Returns RGB value
alert(color);

// ************For Legacy Browsers ************ //
// ************* IE 8 and below *************** //
var color = divFoo.currentStyle["color"];

// How do we support both? We have to write a function that asks if
// if it can use "getComputedStyle" and if not... it will use the Legacy Code

var getStyle = function(el, cssProperty) {
	if (typeof getComputedStyle !== "undefined") {
		return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
	} else {
		return el.currentStyle[cssProperty];
	}
};

var color = getStyle(divFoo, "color");

alert(color);
}());