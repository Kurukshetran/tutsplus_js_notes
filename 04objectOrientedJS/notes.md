# Object Oriented JavaScript

## Introduction to Object-Oriented JavaScript

### Primitives and Objects

Primitive Values - Primitive Types
	Strings
	Numbers
	Booleans
	Undefined
	Null

Objects - Reference Types
	Objects
	Date
	RegExp
	Array
	Function
	DOM API
	Anything brought in from a Third Party

Example:

```javascript
"hello".length
```

Behind the scenes...
	1) JS creates a String Object for string
	2) Uses length property
	3) Destroys that String Object - the literal remains

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
