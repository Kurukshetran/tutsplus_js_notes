// Declare local storage objects

localStorage.firstName = "Andy";

localStorage.setItem("lastName", "Andy");

// Retrieve Local Storage Objects

alert(localStorage.firstName + " " + localStorage.lastName);

alert(localStorage.getItem("firstName") + " " + localStorage.getItem("lastName"));

// Remove Local Storage Objects
localStorage.removeItem("lastName"):

alert(localStorage.lastName); // returns undefined

// Clear all of the key value pairs from local storage
localStorage.clear();

alert(localStorage.firstName);

// The value always gets converted to a string even if it isn't declared that way...
localStorage.age = 24;

alert(typeof localStorage.age); // returns string

var age = parseInt(localStorage.age, 10); // specify the element and number base

// It's more likely to store more complex data
var person = {
	firstName : "Andy",
	lastName : "Cousineau",
	age : 24
};

localStorage.person = person; // This brings up some problems because it will
// convert person to a string...

// We can solve this problem with JSON methods
localStorage.person = JSON.stringify(person);
var personObj = JSON.parse(localStorage.person);

alert(personObj.firstName + " " + personObj.lastName);