// create secretNumber
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));


// check if guess is right
if((guess)===secretNumber) {
	alert("YOU GOT IT RIGHT!!")
}

// otherwise, you got it wrong
else if ((guess) > 4) {
	alert("Too high. Guess again.")
}

// otherwise, check if lower
else {
	alert("Too low. Try again.")
}