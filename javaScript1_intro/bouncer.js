var age = prompt("How old are you?")

if (age<0) {
	console.log ("Error")
}

else if (age < 18) {
	console.log("Sorry you are not old enough to enter the venue")
}

else if (age < 21) {
	console.log("You can enter, but cannot drink")
}

else {
	console.log("Come on in")
}

if (age == 21) {
	console.log("Happy birthday!")
}

if (age % 2 === 1) {
	console.log("Your age is odd!")
}

// If age is odd - Suggested Solution
//(not evenly divisible by two)
// if(age % 2 !== 0) {
//  console.log("Your age is odd!");
// }

if (Number.isInteger(Math.sqrt(age))) {
	console.log("Wow, your age is a perfect square!")
}

// If age is a perfect square - suggested solution
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }