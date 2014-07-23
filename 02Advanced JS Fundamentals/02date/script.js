(function(){
	// Create a new date object
	var date = new Date(); // Reflects the current date and time upon runtime
	console.log(date); // This is based on the time of YOUR COMPUTER!

	// Date representing January 1st, 1997
	// Months are based on a 0-11 scale
	var date1 = new Date(1997, 0, 1); //Year, Month, Day
	console.log(date1);
	
	// Specify time
	// Hours are on a 24 Hour Clock - 0-23
	// Min 0-59
	// Seconds 0-59
	// Milliseconds 0-999
	var date1 = new Date(1997, 0, 1, 22, 5, 30, 157); // Year, Month, Day, Hour, Min, Sec
	console.log(date1);

	// Automatically accounts for daylight savings
	var date2 = new Date(1997, 9, 1, 22, 5, 30, 157);
	console.log(date2);

	// Can also use a JS timestamp
	// Uses milliseconds based on the EPOCH timestamp - January 1st, Midnight, 1970
	// Sooo.... the amount of seconds based from the above time...
	// Moving from UNIX - multiply 1000

	// Get year - assuming we don't know what the date object contains
	var dateMethods = new Date(1378927851);
	console.log(dateMethods.getFullYear()); // Logs year ex. "2013"
	console.log(dateMethods.getMonth()); // Logs numeric value 0-11

	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	var month = months[dateMethods.getMonth()];
	console.log(month);

	console.log(dateMethods.getDate()); // Logs 1-31 based on the day
	console.log(dateMethods.getDay()); // Logs 0-6 base on name of day ex "Saturday"

	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	console.log(dateMethods.getHours()); // Gets the hours
	console.log(dateMethods.getMinutes()); // Gets the minutes
	console.log(dateMethods.getSeconds()); // Gets the seconds
	console.log(dateMethods.getMilliseconds()); // Gets the milliseconds
	console.log(dateMethods.getTime()); // Returns EPOCH timestamp
	console.log(dateMethods.getTimezoneOffset()); // Returns in minutes - 4 hours - 240 min

	// We can actually set a new date and time information for the date objects
	console.log(dateMethods.setMonth(3)); // Sets it to "April"
	
	// Set the month in reference to current month
	console.log(dateMethods.setMonth(dateMethods.getMonth() - 1));

	// Setting a new date by subtraction
	var dateJanOne = new Date(2000, 0, 1);
	console.log(dateJanOne.setDate(dateJanOne.getDate() - 1)); // Subtracts 1 day

	// Date Comparison
	var date = new Date(1997, 0, 1),
		date2 = new Date(1998, 0, 1);

	if (date < date2) {
		console.log("date is less than date2");
	} else {
		console.log("date is not less than date2");
	}

	// Can do comparisons.... but CAN'T DO EQUALITY because they are COMPLEX OBJECTS

}());