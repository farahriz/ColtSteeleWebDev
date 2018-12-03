// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

function isEven(x) {
	if(x % 2 === 0) {
		return true
	}
	return false
}

// Write a function factorial() which takes a single numeric argument and returns the factorial of that number

function factorial(num) {
	if(num ===0 || num === 1) {
		return 1
	}
	
	for(var i = num -1 ; i--) {
		var a = (i * (i-1));
		return a*(i)

	}

	return ("whats up")
}

// Suggested solution on freeCodeCamp
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// "num*= i" is equivalient to "num = num * i", thus over-writing the value of num to be the end caluclated number after each iteration
// Colt's solution does not require an if function, by setting min variable for i to begin from 2


// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(input) {
	var output = input.replace(/-/g, "_");
	return output;
}