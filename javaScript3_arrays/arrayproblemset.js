// DONE (with some help from google)
// printReverse()
// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself)

// this is for strings, not an array
function printReverse(forward) {
	var reverse = "";
	for (var i = forward.length -1 ; i >= 0 ;i--) {
	  reverse += forward[i]
	}
	return reverse;
}


// colt's solution - please read the question
function cprintReverse(arr) {
	for (var i = arr.length - 1, i>= 0, i--) {
		console.log(arr[i]);
	}
}



// *** isUniform() ****
// write a function isUniform() which takes an array as an arguments and returns true if all elements in the array are identical
// use a loop
// have a variable that keeps track of the first item in the index



// this is from MDN
function allEqual(input) {
    return input.split('').every(char => char === input[0]);
}


// This is me desperately trying to grasp at straws - doesn't reach the use
function isUniform(checkMe) {
	var num = checkMe.length
	// set character to compare to
	var control = checkMe.charAt(0);
	// looks through each character
	for (var i = 0; i < num ;i++) {
		if (control !== checkMe.charAt(i)) {
			return false;
		}
		// checkMe.charAt(i)
	}
	return true;
}

// this is colt's solution - remember these were all support to be for 
function cisUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}




// DONE :,) I did it by myself ;_;
// sumArray()
// write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
// you'll want an answer variable

function sumArray(addme) {
	// determine length of array
	var n = addme.length;

	// set value
	var result = addme[0];

	for (var i = 1; i < n; i++){
		result += addme[i]
	}
		return result;
}

// colt
function csumArray(arr) {
	var total = 0;
	arr.forEach(function(element)) {
		total += element;
	});
	return total;
}



// max()
// write a function max() that accepts an array of numbers and returns the maximum number in the array
// use a variable that stores your maximum number
// check in a loop
function max(sortme) {
	// find out how many elements there are in the array
	var length = sortme.length

	// store first value in array
	var control = sortme[0];
	var maxmem = control;

	// compare first number to next
	for (i = 1; i < length; i++) {
		if (control >= sortme[i]) {
		} control = sortme[i];
	} 
	return maxmem;
}


// function fmax(input) {
//     return input.every(char => char > input[0]);
// }


// colt
function cmax(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (arr(i) > max) {
			max = arr[i];
		}
	}
	return max;
}