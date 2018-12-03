var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var ageUser = prompt("How old are you?");
console.log("Nice to meet you, " + firstName + " " + lastName);
console.log("Seems like you're "+ ageUser+ " years old");

var ageDays = ageUser * 365.25;

alert(ageUser + " years is roughly " + ageDays + " days");