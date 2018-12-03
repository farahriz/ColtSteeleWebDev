var variousMovies = [
	{name: "Amelie", stars:4, hasWatched: false},
	{name: "Frozen", stars: 4.5, hasWatched: true},
	{name: "The Breadwinner", stars:5, hasWatched: false},
	{name: "Ocean's 8", stars:3.5, hasWatched: false},
	{name: "Pitch Perfect 3", stars:2, hasWatched: false},
]

function makeReview(variousMovies) {
	for (i = 0; i < variousMovies.length; i++) {
		if (variousMovies[i].hasWatched === true) {
		console.log("You have watched \"" + variousMovies[i].name + "\" - " + variousMovies[i].stars + " stars");
		} else {console.log("You have not seen \"" + variousMovies[i].name + "\" - " + variousMovies[i].stars + " stars");
			}
	}
}

// Colt's solution
variousMovies.forEach(function(variousMovies) {
	var result = "You have ";
	if(variousMovies.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + variousMovies.name + "\" - ";
	result += variousMovies.stars + " stars";
	console.log(result)
})

// It would be neater to make building the string a different function, though
// e.g.

function buildString(variousMovies){
	var result = "You have ";
	if(variousMovies.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + variousMovies.name + "\" - ";
	result += variousMovies.stars + " stars";
	return result;
}

variousMovies.forEach(function(variousMovies){
	console.log(buildString(variousMovies));
});