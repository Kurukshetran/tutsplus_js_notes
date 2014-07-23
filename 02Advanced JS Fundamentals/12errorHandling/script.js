(function(){
	try {
		alert("This code will not fail");
		abert("This code will fail");
		alert("This will not execute");
	} catch (error) {
		alert("An error occurred. Please try again later.");
		alert(error.message);
	} finally {
		// Clean up code for an error
		alert("This is within finally");
	}
}());