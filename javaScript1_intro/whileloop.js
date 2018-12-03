console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")

var test1 = 19
while (test1 >= -10) {
	console.log(test1)
	test1--
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
var test2 = 10

while (test2<41) {
	console.log (test2)
	test2+=2
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")

var test3 = 300
while (test3<334) {
	if (test3 % 2!==0) {
		console.log(test3)
	}
	// else {

	// }
	test3++
}

console.log("PRINT ALL NUMBERS DIVISBLE BY 5 AND 3 BETWEEN 5 AND 50")

var test4 = 5
while (test4<51) {
	if (test4 % 5 === 0 && test4 % 3 === 0) {
		console.log(test4)
	}
	// else {} - The else is unneccesary
	test4++
}