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
	console.log("New Game!!!");
	//Display: "Press any key to get started!"
	console.log("Press any key to get started!");
		
	//Display: Number of wins
	console.log("Wins: " + wins);

	//Display: Number of loses
	console.log("Loses: " + losses);

	//Display: Number of guesses remaining
	console.log("Guesses remaining: " + guessesRemaining);
}

//Display: A "_ " (underscore and space) for each character in the word ( "_ _ _" for "cat")
function hideWord (word) {
	for (i=0; i<word.length; i++) {
			guessThisWord[i] = "_ ";	
		}
		guessThisWord.join("");
		console.log(word); 
	}

//Reset in-game stats
function restartGame () {
	guessesRemaining = 20;
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
	console.log(userGuess);
	checkGuess(currentWord);
	guessesRemaining -= 1;

	//Compile a list of letters guessed
	lettersGuessed += userGuess.toUpperCase();
	lettersGuessed += " ";

	console.log("Guess the word: " + guessThisWord.join(""));
	console.log("These letters have been guessed: " + lettersGuessed);
	//console.log("got that right: " + guessedRight);
	if (guessThisWord.join("") === currentWord) {
		console.log("You win!!!");
		wins += 1;
		restartGame();
	}

	console.log("enter a key");
	console.log("Guesses remaining: " + guessesRemaining);
	if (guessesRemaining === 0) {
		console.log("You're a loser!!!!")
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

