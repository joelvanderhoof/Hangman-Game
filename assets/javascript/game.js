//Hangman Game

//Theme: Arnold Movies


//Declare the game object which will include all variables as properties and functions as methods
var words = ["Terminator",
		"Predator",
		"Commando",
		"Conan The Barbarian",
		"Total Recal",
		"Terminator 2",
		"Conan The Destroyer",
		"Kindergarten Cop"];
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);
var remainingLetters = currentWord;
var guessesRemaining = 15;
var guessesUsed = 0;
var guessedRight = 0;
var guessedWrong = 0;
var wins = 0;
var losses = 0;
var userGuess = 0;
var correctGuessedLetters = [];
var guessThisWord = [];


//Display: A "_ " (underscore and space) for each character in the word ( "_ _ _" for "cat")
function hideWord (word) {
	console.log(word);
	for (i=0; i<word.length; i++) {
			
			guessThisWord[i] = "_ ";
			
		}
		console.log(word); 
	}

hideWord(currentWord);

//Event listener for keyup to register when the user types a letter
document.onkeyup = function (event) {
	userGuess = event.key.toLowerCase();
	guessesRemaining -= 1;
	console.log(userGuess);
	checkGuess(currentWord);
	console.log("Score: " + guessedRight)
	console.log(guessThisWord);
	//console.log("got that right: " + guessedRight);
	if (guessThisWord.join("") === currentWord) {
	console.log("You win!!!");
	}
}

//Checks the users guess against the word
function checkGuess (word) {
	console.log("enter a key");
	for (i=0; i<word.length; i++) {
			//console.log("The current letter in the loop is: " + word[i]);
		if (userGuess === word[i].toLowerCase()) {
			console.log(word);
			//add correctly guessed letter to
			guessThisWord[i] = word[i];
			console.log(guessThisWord);
			console.log(guessThisWord.join(""));
			guessedRight += 1;
			//break;
		} 
	}
}



//Display on the page
	//Display: "Press any key to get started!"
	//Display: Number of wins




	//Display: Letters guessed so far for the word ("g _ a _ e" for "game")


	//Display: Number of guesses remaining

		//Start with 5

		//Only decriment for wrong guesses


	//Display: All letters guessed so far (example: D E S H O N W S)

//User wins when all letters in the movie title have been guessed
// if (correctGuessedLetters.toLowerCase() === currentWord.toLowerCase()) {
// 	console.log("You win!!!");
// }

if (guessesRemaining === 0) {
	console.log("You lose!");
}
	//Display wins losses: 

		//Update scpre after each game

	//Start new game automatically


