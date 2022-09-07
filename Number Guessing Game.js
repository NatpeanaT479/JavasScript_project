const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// creating the game function for restart feature
function NumberGuessingGame (){
  
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
const name = prompt('What is your name?');
console.log(`Hey there ${name}`)
let guess = prompt(`Alright ${name}, guess a number from 1 to 100`);
console.log("My number is " + guess)
    
while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
  
  try {
    if (isNaN(guess)) throw "Your guess must be a number"
  }
  catch(err){
      console.log(err)
      guess = prompt('Alright guess a number this time ');
      console.log("My number is " + guess)
  }
    let num_guess = Number(guess);
    
  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
 
  if (num_guess == numberInMind){
    console.log(guess +' is correct! You win!');
    foundCorrectNumber = true
  } 
  else if (num_guess > numberInMind){
    console.log(guess + " is too large. Try again.");
    guess = prompt("I guess ")
    //num_guess = Number(guess)
  } 
  else if (num_guess < numberInMind){
    console.log(guess + " is too small. Try again.");
    guess = prompt("I guess ")
    //num_guess = Number(guess)
  } 

  }
}

NumberGuessingGame()


// Bonus Point: prompt user and provide option for user to start a new game after winning
const restart = prompt("Do you want to start a new game?")
console.log(restart)
if (restart == 'YES'|| 'yes'){
  NumberGuessingGame()
}
else{
  console.log("See ya!")
}