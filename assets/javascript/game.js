
//global variables
  // Creates an array that lists out all of the options.
  var words = [
    "negroni",
    "sazerac",
    "rickey",
    "diablo",
    "mule",
    "vesper",
    "highball",
    "rattlesnake",
    "sour",
    "poussecafe",
    "gimlet",
    "mule",
    "paloma",
    "gintonic",
    "shot",
    "daiquiri",
    "fizz",
    "aviation",
    "spritz",
    "bellini",
    "gibson",
   ];

  var currentWord = "";

  var answerArray = [];


  //FUNCTIONS to start the game
  //pick a random word from the "words" array
  var currentWord = words[Math.floor(Math.random() * words.length)];
  //Set up the answer array.
  var answerArray = [];
  for (var i = 0; i<currentWord.length; i++){
    answerArray[i] = " _ ";
    }
  var remainingLetters = currentWord.length;

  //user guesses letters
  document.onkeyup = function (event){
    ////don't know what to write here :(

  //user enters key
    //record #####var enteredKey = event.keycode()
    for (var i = 0; i<currentWord.length; i++){


      //if key correct,
        //add/append into answerArray
        // if all letters entered are correct,
          //increase score +=1
          //break

      //if key not correct, add into badArray

      }

  }



/*
//initialize the game
  function init (){
    var currentWord = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i<currentWord.length; i++){
      answerArray[i] = " _ ";
      }
    document.getElementById("answer").innerHTML= answerArray.join("");
    document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
  }
  init ();





  //The game loop.
  function guessOne () {
    //get guess from user
    var guess = document.getElementById("guess").value;
    var showThisMessage = "";

    if (guess.length !==1){
      showThisMessage ="Please enter a single letter.";
    } else{
      //Update the game state with the guess.
      var i = 0;
      for(i=0;i<currentWord.length;i++){
        if (currentWord[j] === guess){
          answerArray[i]=guess;
        }
      }
    }
  }

      var remaining_Letters = answerArray.length;
      for (i=0; i<answerArray.length; i++){
        if (answerArray[i] !=='_'){
            remaining_Letters -=1;
        }
      }

      //If user guesses, show the answer and reward the player
      if (remaining_Letters ==0) {
        showThisMessage = "Cheers!  The cocktail you will have is a "+currentWord;
      }

      //otherwise . . .
      if (showThisMessage ==="") {
        showThisMessage = "Sorry, no" +guess
      }

      document.getElementById("answer").innerHTML = answerArray.join("");

      document.getElementById("guess").value = "";
  }
  document.getElementById("message").innerHTML = showThisMessage;
}

function quit(){
    document.getElementById("message").innerHTML = "The cocktail is " + currentWord;
    for (var j=0; j < currentWord.length; j++) {
        answerArray [j] = word [j];
    }

    document.getElementById("answer").innerHTML = answerArray.join("");
}








  // This function is run whenever the user presses a key.
  // document.onkeyup = function(event) {
    // Determines which key was pressed.
//     var guesses = event.key;
//     if (!words.includes(words)){
//       alert("Pick a letter, any letter.");
//       return;
//     };
// console.log (cocktail);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    // currentWord = cocktail[Math.floor(Math.random() * cocktail.length)]; *\
