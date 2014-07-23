(function () {
var i = 0;
var speed = 500;
var doSomething = function() {
	console.log("doSomething() executed " + (i+1) + " times");
	i = i + 1;
	if(i > 9) {
		// setTimeout(doSomething, speed);
		clearInterval(timer);
	}
};

var timer = setInterval(doSomething, speed);
// alert("hello");

}());