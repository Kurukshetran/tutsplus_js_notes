// At the heart of AJAX, there is an object called XMLHttpRequest
// don't be fooled by the name, it's just a name for
// an object to retrieve really any data from a server

var xhr = new XMLHttpRequest(); // Creates a new object with the constructor
// Doesn't work in IE6 but that's okay because we want it to die anyway...

// Specify to make the request or "open" a request...
// Three Arguments:
// 1) Request Type ex. GET, POST
// 2) URL we want to request...
// 3) Asynchronous On or Off - True or False
// We use false below, but we generally want asynchronous mode with true
xhr.open("GET", "TextFile.txt", false);

// Next is to send the request with data however..
// Because it's only a GET request, we don't pass anything - null
xhr.send(null);

// Once it's completed, and data is sent back
// We can use that data
alert(xhr.responseText); // Just alert the text from the file

// Synchronous Mode stops the browser from performing any other actions
// better to use Asynchronous Mode because it will send the request, and still load
// more contents on the page

// The issue though with Asynchronous Mode - it may try to use the data before 
// it comes back from the server... so there is something called "readyState"

xhr.open("GET", "TextFile.txt", true); // To test "something bad happened change
// this source to "TextFile2.txt"
xhr.send(null);
// DOM Level Zero but it's perfectly fine for this
// Event Handler

xhr.onreadystatechange = function () {
    // 5 Different Stages of Ready State
    // 0 - 4, the 4th One is the only one we care about because that means the
    // request was sent and we have everything that was returned
    if (xhr.readyState === 4) {
        // we also need to check the status code - xhr.status
        // 404 - server couldn't find what was requested
        // 500 - encountered an area
        // 200 - 299 - everything is okay
        // 304 - everything is okay but it hasn't changed since we've last requested it
        var status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304) {
            alert(xhr.responseText);
        } else {
            alert("Something bad happened");
        }
    }
};

// alert(xhr.responseText + "this is outside of event handler");

// So Basis for AJAX is...
// 1) Create the XHR Object
// 2) Open the Object - Request, URL, Asynchronous Mode
// 3) Use onreadystatechange - event handler to check for readyState
// 4) Get Request Status
// 5) Execute the code...

// Now lets try doing a POST request...
// Will need to perform the request when the user submits the form
// So we have to listen for the form to be submitted
var form = document.getElementById("theForm"); //DO NOT USUALLY DO THIS! 
// Normally we need to put it inside an immediately invoked function

eventUtility.addEvent(form, "submit", function (e) {
    var data = getRequestBody();

    var xhr2 = new XMLHttpRequest();
    xhr2.open("POST", "TextFile.txt", true);

    // We will need to specify the header
    xhr2.setRequestHeader("Content-Type", "application/x-wwww-form-urlencoded");
    // Two Arguements
    // 1) Header We Want to Set - "Content-Type"
    // 2) Value for that Header - see above...
    // As long as the header is set before the send(); everything is fine...

    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4) {
            var status = xhr2.status;

            if ((status >= 200 && status < 300) || status === 304) {
                alert(xhr2.responseText);
            } else {
                alert(status); //Doesn't really work... because we can't POST to a textfile
                // in IIS - application used to create this...
            }
        }
    };

    xhr2.send(data);

    eventUtility.preventDefault(e);
});

// Assemble a function to get information from the form
var getRequestBody = function () {
    var form = document.getElementById("theForm"),
    // Create variable to hold the values from the for loop
        values = [];

    // form.elements contains all form control elements
    for (var i = 0, l = form.elements.length; i < l; i = i + 1) {
        var el = form.elements[i],
        // Format data into a way the server expects
        // Similar to query portion
        // fieldName=value&name=value2
        name = encodeURIComponent(el.name), // Isn't really sufficient because we need
        // to encode the name and value so it can be passed to a URL
        // So... we actually do encodeURI();
        value = encodeURIComponent(el.value),
        complete = name + "=" + value;

        values.push(complete);
    }

    // Now we want to return the name/value pairs and join them with "&"
    return values.join("&");
};