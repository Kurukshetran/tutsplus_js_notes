(function(){

// These never create permanent changes to the HTML - done in memory in the browser

// This returns a LIVE node list - as elements are created, this variable gets updated
var pElements = document.getElementsByTagName("p");
//alert(pElements.length); // 5 --REFERENCE TO pElements

// Create an element and store in variable to memory
// Only creates the element - does not add it to the DOM
var el = document.createElement("p");

// To add to end of body just before the </body>
document.body.appendChild(el);

//alert(pElements.length); // 6 -- REFERENCE TO pElements

/*
	querySelectorAll - is not a LIVE list - only returns DOM at the time of being run
*/


// *************** CREATION CODE ********************** //

// Give element content
// This is pure text - if HTML markup is used, it will NOT generate the tags
// It will create the tags as text
var content = document.createTextNode("<strong>This was dynamically created</strong>");

el.appendChild(content); //places it just before the </p> -- adding that Text Node

// sets attributes - arguments <name> and <value>
// adds the attributes directly to the HTML
el.setAttribute("align", "center");

// instead of setAttribute("id", "bar");
// this method does not apply to some, class for example
el.id = "bar";

// Add element to DIV element instead...
var doc = document;
var pFoo = doc.getElementById("foo");

// Gets the DIV element that the <p> is inside and appends it just before </div>
pFoo.parentNode.appendChild(el);

// Inserts the element just before the referenced element
// Takes 2 arguments -- element to be added, element that it will insert before
pFoo.parentNode.insertBefore(el, pFoo);

// Replaces a single element with another element
// Two arguments - element to be used and element that will be replaced
pFoo.parentNode.replaceChild(el, pFoo);

// ************* SOMETHING TO BE AWARE OF PERFORMANCE-WISE ************** //
/*
	1) Created Element
	2) Created Content
	3) Set Attributes
	4) THEN added to document

	This means the DOM only needs to be accessed ONCE

	If declared in different order, then you could be accessing the DOM multiple times which could end up 
	slowing down your code
*/

// **** INNERHTML **** //
// Takes HTML text and actually converts it to HTML tags
// innerHTML actually finds the code and returns it as a string

var ell = doc.createElement("p");
ell.innerHTML = "<strong>This is dynamically created</strong>";

// doc.body.appendChild(ell);
//alert(ell.innerHTML);

// **** Replacing HTML ****** //
// Accesses the DOM ONLY TWICE!!!

var html = ell.innerHTML;

html = html + "<br/>This was, too";
html = html + "<br/>This was, too 2";
html = html + "<br/>This was, too 3";

ell.innerHTML = html;

}());