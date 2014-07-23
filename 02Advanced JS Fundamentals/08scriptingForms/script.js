(function(){
	// Get form element object
	var form = document.getElementById("theForm"),
		button = form.myButton, // retrieves the id="myButton" input element
		textbox = form.myTextbox, // retrieves the id="myTextbox" input element
		textarea = form.myTextArea; // retrieves the id="myTextArea" input element

	// Listen for the "submit" event on the form
	eventUtility.addEvent(form, "submit", function(e){
		// Maybe we want to stop the form from being submitted...
		// If user input invalid information into the form
		eventUtility.preventDefault(e); // prevents the ability to "submit" form
	});

	form.submit(); // Submits form but does NOT fire the "submit" event
	// If you are calling the submit(), you have the opportunity to perform
	// whatever validation/js code that needs to be executed before the form
	// is actually "submitted"

	form.reset(); // Simply resets the form

	form.elements; // Collection of elements inside the form - input, radiobuttons, checkboxes
	// Does not include divs

	/////////// Dealing with Text Boxes, Areas, and Buttons

	eventUtility.addEvent(button, "click", function(e){
		var target = eventUtility.getTarget(e);
		alert(target.value); // diplay value of "Click Me!" button - Click Me!
		alert(target.type); // display type of "Click Me!" button - button
		target.disabled = true; // disables the button
		target.disabled = false; // re-enables the button
		
		alert("you clicked me!!");

		// Validation
		
		if (textbox.value === "") {
			alert("please input data in box");
			textbox.focus(); // gives HTML focus to whatever element is specified
		}

		if (textarea.value === "") {
			alert("please input data in larger box");
		}
		

		// Text Selection
		textarea.select(); // Selects the text in the textarea element 
		// - auto focus as well...

		// Text Disabling
		textarea.disabled = true;

		// Change value inside text box
		textarea.value = "Sorry bro...";
	});

	////////////// Dealing with Select Dropdowns
	var form = document.getElementById("theForm"),
		button = form.myButton,
		select = form.dayOfWeek;

	eventUtility.addEvent(button, "click", function(e){
		var target = eventUtility.getTarget(e);
		var index = select.selectedIndex; // 3 for Wednesday
		var option = select.options[index]; // Gets option object for Wednesday

		// New Way -- Not implemented yet...
		var option = select.selectedOptions[0];
		//alert(option.value);

		//Remove an option
		select.remove(3);

		// Create a new option and place it back where it goes...
		var wedOption = new Option("Wednesday", 3); // Text, Value
		select.add(wedOption, select.options[3]); // Takes 2 params, the object to 
		// insert, and the object to insert in front of
	});

	//////////////////// Dealing with CheckBoxes and Radiobuttons
	var form = document.getElementById("theForm"),
		button = form.myButton,
		color = form.color; //gets all the elements in form with name "color"
		// acts like an array

	eventUtility.addEvent(button, "click", function(e){
		var target = eventUtility.getTarget(e);

		// color.checked = true; // checks the button...

		// The name "color" is actually a collection, so we can create
		// a loop to find what elements the user checked
		for (var i = 0, l = color.length; i < l; i = i + 1) {
			if (color[i].checked) {
				alert(color[i].value);
			}
		}

		
		// We can use the same type of pattern if we want to save the 
		// values inside another array, then join them into a string
		var pickedColors = [];

		for (var i = 0, l = color.length; i < l; i = i + 1) {
			if (color[i].checked) {
				pickedColors.push(color[i].value);
			}
		}

		alert(pickedColors.join(", "));

		// For radio buttons
		var pickedColor = "";

		for (var i = 0, l = color.length; i < l; i = i + 1) {
			if (color[i].checked) {
				pickedColor = color[i].value;
			}
		}

		alert(pickedColor);
	});
}());