//Hangman Game

//Theme: Arnold Movies


//Declare the game object which will include all variables as properties and functions as methods
var words = ["Terminator",
		"Predator",
		"Commando",
		"Conan The Barbarian",
		"Total Recall",
		"Terminator 2",
		"Conan The Destroyer",
		"Kindergarten Cop"];

var currentWord = words[Math.floor(Math.random() * words.length)];
var remainingLetters = currentWord;
var guessesRemaining = 20;
var wins = 0;
var losses = 0;
var userGuess = "";
var correctGuessedLetters = [];
var guessThisWord = [];
var lettersGuessed = "";


//Display info at start of new game
function newGameDisplay () {
	document.getElementById("header").innerHTML = "<p>Arnold Movie Hangman!!!</p>";
	document.getElementById("new-game").innerHTML = "<p>New Game!!!</p>";

		//Display: "Press any key to get started!"
	document.getElementById("press-play").innerHTML = "<p>Press any key to get started!</p>";		
}

//Displays updated stats
function inGameDisplay () {
	//Hide these messages
	document.getElementById("winner-loser").innerHTML = "";
	document.getElementById("new-game").innerHTML = "";
	document.getElementById("press-play").innerHTML = "";	
	hideGif();
	
	//Display: Number of wins
	document.getElementById("wins").innerHTML = "<p>Wins: " + wins + "</p>";	

	//Display: Number of loses
	document.getElementById("losses").innerHTML = "<p>Losses: " + losses + "</p>";	

	//DIsplay: The current word(s) to guess
	document.getElementById("current-word").innerHTML = "<p>Guess the word(s) : " + guessThisWord.join("") + "</p>";	

	//Display: Number of guesses remaining
	document.getElementById("guesses-remaining").innerHTML = "<p>Guesses remaining: " + guessesRemaining + "</p>";

	//Display: Letters guessed so far
	document.getElementById("letters-guessed").innerHTML = "<p>Letters guessed so far: " + lettersGuessed + "</p>";	

}

function wait(ms) {
	var start = new Date().getTime();
	var end = start;
	while ( end < start + ms ) {
		end = new Date().getTime();
	}
}

function hideElements () {
	//Hide other display elements until a new game starts
	document.getElementById("new-game").innerHTML = "";
	document.getElementById("press-play").innerHTML = "";	
	document.getElementById("wins").innerHTML = "";	
	document.getElementById("losses").innerHTML = "";	
	document.getElementById("current-word").innerHTML = "";	
	document.getElementById("guesses-remaining").innerHTML = "";
	document.getElementById("letters-guessed").innerHTML = "";	
}

function showGif () {
		document.getElementById("movie-gif").src = "assets/images/" + currentWord + ".gif";
}

function hideGif () {
	document.getElementById("movie-gif").src = "";
}

function winner () {
	document.getElementById("winner-loser").innerHTML = "<p>You're A Winner!!!</p>";
	hideElements();

	//function for showing cool Arnold gif for the movie
	showGif();
}

function loser () {
	document.getElementById("winner-loser").innerHTML = "<p>You're A Loser!!!</p>";
	hideElements();
}

//Display: A "_ " (underscore and space) for each character in the word ( "_ _ _" for "cat")
function hideWord (word) {
	for (i=0; i<word.length; i++) {
			guessThisWord[i] = "_ ";	
		}
		guessThisWord.join("");
		//console.log(word); 
	}

//Reset in-game stats
function restartGame () {
	guessesRemaining = 21;
	userGuess = "";
	correctGuessedLetters = [];
	guessThisWord = [];
	lettersGuessed = "";
	
	//Pick new movie title
	currentWord = words[Math.floor(Math.random() * words.length)];
	hideWord(currentWord);
	remainingLetters = currentWord;
	
	newGameDisplay();

}

//Starts the game
restartGame();


//Event listener for keyup to register when the user types a letter
document.onkeyup = function (event) {
	userGuess = event.key.toLowerCase();
	checkGuess(currentWord);
	guessesRemaining -= 1;

	//Compile a list of letters guessed
	lettersGuessed += userGuess.toUpperCase();
	lettersGuessed += " ";

	//Update game stats
	inGameDisplay();
	

	//console.log("got that right: " + guessedRight);
	if (guessThisWord.join("") === currentWord) {
		winner();
		wins += 1;
		restartGame();
	}

	// console.log("Guesses remaining: " + guessesRemaining);
	if (guessesRemaining === 0) {
		loser();
		losses +=1;
		restartGame();
	}
	
}

//Checks the users guess against the word
function checkGuess (word) {
	for (i=0; i<word.length; i++) {
			//console.log("The current letter in the loop is: " + word[i]);
		if (userGuess === word[i].toLowerCase()) {
			//Display: All letters guessed so far (example: D E S H O N W S)
			console.log(word);
			//add correctly guessed letter to
			guessThisWord[i] = word[i];
			//Display: Letters guessed so far for the word ("g _ a _ e" for "game")
			console.log(guessThisWord);
			
		}
	}
}

