//available pc random choices
var computerChoices = ["a", "b","c", "d", "e", "f", "t", "u", "v", "w", "x", "y", "z",];

//set variable to zer0
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = [];
var letterToGuess = undefined;

//new variables afer key is pushed, connect to HTML for visual

var newGuessesLeft = function(){
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;

};

//pc chooses random and displays in console.log

var newLetterToGuess = function () {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);

};

//save keys pressed seperate by comma
                            
var newGuessesSoFar = function()  {
    document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " +  guessedLetters.join(', ');

};

//reset function called after win or lose
 
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}


//create onkey function for guesses left and reduce by 1

document.onKeyup = function(event){
    guessesLeft--;

    console.log(event.key);
    console.log(guessedLetters);

    //stick to lower case

    var userGuesses =  String.fromCharCode(event.keyCode).toLowerCase();

    //push guessed letter to userGuesses and update var functions

    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    //no guesses left user looses. Guesses Left user wins

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            winns++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;  
            alert("Are You Psychic ??? Go Again!!");
            reset();
}

    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("Bummer, You're Not Psychic... Go Again!");
        reset();

    }

};