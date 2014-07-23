var xhr = new XMLHttpRequest();

xhr.open("GET", "rss.json.txt", true);

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		var status = xhr.status;

		if ((status >= 200 && status < 300) || status === 304) {
			alert(xhr.responseText); // will return the JSON txt file
			// Lets convert the JSON into an actual JS object
			var rss = JSON.parse(xhr.responseText); 
			// De-serialize a JSON structure into a JS Object
			// another method is stringify(); -- pass it a JS object to convert to JSON
			alert(rss.channel.title); // Based on that JSON structure
			// Convert object back to JSON
			var json = JSON.stringify(rss); 

			alert(json);

			alert(json === xhr.responseText); // Returns true
		}
	}
};

xhr.send(null);

/////////////////////// Let's try a POST request

var xhr2 = new XMLHttpRequest();

var person = {
	firstName = "Andy",
	lastName = "Cousineau",
	age = 24
};

xhr2.open("POST", "rss.json.txt", true);
// Set Header
xhr2.setRequestHeader("Content-Type", "application/json");
xhr2.onreadystatechange = function() {
	if (xhr2.readyState === 4) {
		var status = xhr2.status;

		if ((status >= 200 && status < 300) || status === 304) {
			alert(xhr2.responseText); // will return the JSON txt file
			// Lets convert the JSON into an actual JS object
			var rss = JSON.parse(xhr2.responseText); 
			// De-serialize a JSON structure into a JS Object
			// another method is stringify(); -- pass it a JS object to convert to JSON
			alert(rss.channel.title); // Based on that JSON structure
			// Convert object back to JSON
			var json = JSON.stringify(rss); 

			alert(json);

			alert(json === xhr.responseText); //Returns true
		}
	}
};

xhr2.send(json.stringify(person));