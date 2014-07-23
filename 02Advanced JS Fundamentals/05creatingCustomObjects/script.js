(function() {
	// Create a person object using the literal syntax
	var person = {
		firstName: "Andy",
		lastName: "Cousineau",
		getFullName: function() {
			// "this" refers to whatever object the function is attached to
			// it's like calling person.firstName
			return this.firstName + " " + this.lastName;
		}
	};
	var person2 = {
		firstName: "Claire",
		lastName: "Cousineau",
		getFullName: function() {
			// "this" refers to whatever object the function is attached to
			// it's like calling person.firstName
			return this.firstName + " " + this.lastName;
		}
	};

	// The above 2 objects are created with the same interface but it's also
	// not very scalable because of the literal notation
	// Makes code a lot bigger, makes it more difficult to maintain

	// Lets create a FACTORY FUNCTION instead
	function createPerson(firstName, lastName) {
		return {
			firstName: firstName,
			lastName: lastName,
			getFullName: function() {
				return this.firstName + " " + this.lastName;
			},
			// Greet other objects with the same interface
			greet: function(person) {
				if( typeof person.getFullName !== "undefined" ) {
					return "Hello, " + person.getFullName(); // This code implies we pass
					// an object with a getFullName method
				} else {
					"Hello, there!";
				}
			}
		};
	}

	var person = createPerson("Andy", "Cousineau");
	var person2 = createPerson("Claire", "Cousineau");

	// Little bit more efficient because there is a single interface
	// To create new objects, you simply assign this function to a new variable
	// with different parameters

	// With line 36, now we can test to see if the object passed has a getFullName
	// property... however... this code still assumes that the getFullName property
	// is a method...

	console.log(person.greet({getFullName: "This is a string" })); // Returns nothing - error in console
	// Property getFullName of "object" is NOT a function

	// A better solution for this kind of object creation is a constructor function
	var date = new Date(); // "new" creates a new object based of the Date constructor

	var Person = function(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;

		this.getFullName = function() {
			return this.firstName + " " + this.lastName;
		};

		this.greet = function(person) {
			if ( person instanceof Person ) { // does a check to see if the object was created
				// with the Person constructor function
				return "Hello, " + person.getFullName();
			} else {
				return "Hello, there!";
			}
		};
	}

	var person = new Person("Andy", "Cousineau");
	var person2 = new Person("Claire", "Cousineau");

	// As long as "new" keyword is used when creating objects there shouldn't
	// be an issue... however... if you do come across something like
	// var person = Person("Andy", "Cousineau"); - this could be the constructor
	// function -- trying to create an object without "new" creates an object in which
	// "this" keyword references window...
	// Remedy with if ( this === window ) {
	//				   return new Person(firstName, lastName);
	//			   }

	// The other note - constructor functions automatically return the object
	// No need to perform "return this"

	// Any method within a constructor function gets recreated when a new object
	// is created - not very efficient (creates a closure of sorts);
	// to get around the inefficiency - there is a property of a function

	// PROTOTYPE
	// Every function has a property PROTOTYPE
	// If the methods are created on the PROTOTYPE they are only created once

	var Person = function(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	};

	Person.prototype.getFullName = function(person) {
		return this.firstName + " " + this.lastName;
	};

	Person.prototype.greet = function() {
		if ( person instanceof Person ) {
			return "Hello, " + person.getFullName();
		} else {
			return "Hello, there!";
		}
	};

}());