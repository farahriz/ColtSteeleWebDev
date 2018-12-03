function sayHi() {
	console.log("Hello WORLD");
	console.log("You say goodbye!");
}


// Arguments
function sayHello() {
	console.log("Hello there!");
}


function sayHello(name) {
	console.log("Hello there, " + name +"!"); 
}


// Return generates an output. Console.log simply prints. With console.log, there is a function but no defined output.
function square(x) {
	return x * x;
}

function capitalise(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city="paris";
var capital= capitalise(city);