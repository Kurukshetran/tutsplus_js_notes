# Object Oriented JavaScript

## Introduction to Object-Oriented JavaScript

### Primitives and Objects

Primitive Values - Primitive Types
* Strings
* Numbers
* Booleans
* Undefined
* Null

Objects - Reference Types
* Objects
* Date
* RegExp
* Array
* Function
* DOM API
* Anything brought in from a Third Party

Example:

```javascript
"hello".length
```

Behind the scenes...
1. JS creates a String Object for string
2. Uses length property
3. Destroys that String Object - the literal remains

The only thing that changes the "typeof" is the "new" keyword which 
actually means it's using the String Object Constructor

Same with Number, Boolean

CAN'T ASSIGN PROPERTIES OR METHODS TO PRIMITIVE VALUES:

```javascript
var num = 10;
num.property = "hello";
num.property // returns undefined....

num = new Number(10);
num.property = "hello";
num.property; // returns "hello"
```

### Creating Objects and Factory Functions

How to write objects... however - this way is outdated...

```javascript
var person = new Object();

//Any property must be given a value to exist - will not be undefined if no value is given like a variable
person.firstName = "Andy";
person.lastName = "Cousineau";

person.sayHi = function() {
	console.log("Hi there");
};

person.firstName //"Andy"
person.lastName //"Cousineau"
person.sayHi();	//"Hi there"
```

**Members** - properties or methods of an object (or data type) - regardless of private or public

Object Literal Notation:

```javascript
var person = { 	//less key strokes and executes faster - because it is considered a single statement instead of executing multiple statements
	firstName : "Andy",
	lastName : "Cousineau",
	sayHi : function() {
		return "Hi there";
	}
};	
```

Problem with the above code is that we can't create multiple objects with the same "INTERFACE" easily... - we would need to duplicate this code for every object we want to create...

Factory Function:

```javascript
//Creates an object and returns that object
var createPerson = function(firstName, lastName) {
	return {
		firstName : firstName,
		lastName : lastName,
		sayHi : function() {
			return "Hi there";
		}
	};
};

var andyCousineau = createPerson("Andy", "Cousineau");
var claireCouncilman = createPerson("Claire", "Councilman");
```

### The ```this``` Keyword

Object can refer to itself inside of the object's methods.

```javascript
// Greet below is on the global (window) object
var name = "Claire Councilman";

var greet = function() {
	return "My name is " + this.name;
};


// Greet below is local to the andyCousineau object scope
var andyCousineau = {
	name : "Andy Cousineau",
	greet : function() {
		return "My name is " + this.name;
	}
};
```

Now check this out - one can use the same function but this depending on what scope it's in when called will change the value of ```this```

```javascript
window.name = "Claire Councilman";

var globalGreet = function() {
	return "My name is " + this.name;
};

var andyCousineau = {
	name : "Andy Cousineau",
	greet : globalGreet
};

andyCousineau.greet(); //Returns "My name is Andy Cousineau"

globalGreet(); //Returns "My name is Claire Councilman"
```

There is a way to force the value of ```this``` using ```bind()``` - it will actually bind the function to whatever object is passed in as the argument

```javascript
window.name = "Claire Councilman";

var globalGreet = function() {
	return "My name is " + this.name;
};

var andyCousineau = {
	name : "Andy Cousineau",
	greet : globalGreet.bind(window) 	//Returns "Claire Councilman"
										//Creates a new Function object that is bound to the "window" object
};
```

This is very useful for when assigning a callback function - handle event but don't want the event handler to execute within the context of the event target

```javascript
var makeRequest = function(url, callback) {
	//make request with the provided url

	var data = 10; //usually it's in text, json, xml

	callback(data);
};

var obj = {
	someValue : 20,
	loadData : function(data) {
		var sum = this.someValue + data;

		console.log(sum);
	},
	prepareRequest : function() {
		var url = "http://google.com";

		makeRequest(url, this.loadData.bind(this));
	}
};
```

BIND DOES EXIST IN IE8 - Can be easily shimmed so it can be used though...

### Data and Accessor Properties

Types of Descriptors:
* Data Descriptors - Allows to create property that is read only
* Accessor Descriptors - Create property that is dynamic - Get and Set values of properties

Both descriptors are mutually exclusive meaning a property can't have both data and accessor descriptors.

```javascript
var createPerson = function(firstName, lastName) {
	var person = {};

	// Defines a Property
	// 3 Arguments
	// 1st) Object to define property on
	// 2nd) The Property we want to define as a string value
	// 3rd) Descriptor Object - Contains all options for particular property 
	Object.defineProperty(person, "firstName", {
		//Data descriptors
		value : firstName,
		writable : false  //DEFAULT so it can be ommited
	});

	Object.defineProperty(person, "lastName", {
		//Data descriptors
		value : lastName,
		writable : false
	});

	return person;	
};

var person = createPerson("Andy", "Cousineau");
```

Defining multiple properties in a single function

```javascript
var createPerson = function(firstName, lastName) {
	var person = {};

	Object.defineProperties(person, {
		firstName : {
			value : firstName,
			writable : true
		},
		lastName : {
			value : lastName,
			writable : true
		},
		fullName : {
			get : function() {
				return this.firstName + " " + this.lastName;
			},
			set : function(value) {
				this.firstName = value;
				this.lastName = value;
			}
		}
	});

	return person;
};

var person = createPerson("Andy", "Cousineau");
```

There are also 2 options we can apply to any property:
* Configurable - Determines if property can be redefined after initial value is set
* Enumerable - Determines if property can be enumerated - "for in" loop

Configurable Example:

```javascript
var createPerson = function(firstName, lastName) {
	var person = {};

	Object.defineProperties(person, {
		firstName : {
			value : firstName
		},
		lastName : {
			value : lastName
		},
		fullName : {
			get : function() {
				return this.firstName + " " + this.lastName;
			},
			configurable : true		//otherwise throws an error "TypeError: Cannot redefine property: fullName"
		}
	});

	return person;
};

var person = createPerson("Andy", "Cousineau");

Object.defineProperty(person, "fullName", {
	get : function() {
		return this.lastName + ", " + this.firstName;
	}
});
```

Enumberable Example: Very Common to set it to TRUE

```javascript
var createPerson = function(firstName, lastName) {
	var person = {};

	Object.defineProperties(person, {
		firstName : {
			value : firstName,
			enumerable : true
		},
		lastName : {
			value : lastName,
			enumerable : true
		},
		fullName : {
			get : function() {
				return this.firstName + " " + this.lastName;
			},
			enumerable : true
		}
	});

	return person;
};

var person = createPerson("Andy", "Cousineau");

//1 Way to Enumerate over an Object
for (var prop in person) {

}

//2nd Way to Enumerate
Object.keys(person);
```

## First Exercise

### Exercise 1: Building a Simple Toolbar