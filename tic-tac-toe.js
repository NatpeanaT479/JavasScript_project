/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    let numposition = Number(position)
    board[numposition] = mark
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    let tempboard = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};
    for (let numposition in board){
        if (board[numposition] == " "){
            tempboard[numposition] = String(numposition)
        }
        else{
            tempboard[numposition] = board[numposition]
        }
        console.log(tempboard[1] + ' | ' + tempboard[2] + ' | ' + tempboard[3])
        console.log('---------')
        console.log(tempboard[4] + ' | ' + tempboard[5] + ' | ' + tempboard[6])
        console.log('---------')
        console.log(tempboard[7] + ' | ' + tempboard[8] + ' | ' + tempboard[9])
    }
}



// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    try{
       if((isNaN(position))) throw "that is not a number"
    }
    catch(err){
        console.log(err)
        return false
    }
    let numposition = Number(position)
    // to add in try and catch in actual game
    if (numposition >= 1 && numposition <= 9){
        if (board[numposition] == " "){
           return true
        }
        else{
            console.log("The number has been taken!")
            return false 
        }
    }
    else{
        console.log("Out of range!")
        return false
    }
    
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
     if (board[1] === player && board[2] === player && board[3] === player){
        return true;
    }
    else if (board[4] === player && board[5] === player && board[6] === player){
        return true;
    }
    else if (board[7] === player && board[8] === player && board[9] === player){
        return true;
    }
    else if (board[1] === player && board[4] === player && board[7] === player){
        return true;
    }
    else if (board[2] === player && board[5] === player && board[8] === player){
        return true;
    }
    else if (board[3] === player && board[6] === player && board[9] === player){
        return true;
    }
    else if(board[1] === player && board[5] ===player && board[9] === player){
        return true;
    }
    else if(board[7] === player && board[5] === player && board[3] === player){
        return true;
    }
return false

}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for(numposition in board){
        if (board[numposition] ==" "){
            return false
        }
    }
    return true    
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
let currentTurnPlayer = 'X'
let arrayX =[]
let arrayO =[]
let move = null
function TicTacToe(){
        
function playTurn(player) {
    move = prompt(currentTurnPlayer +"'s turn: ")
    if (validateMove(move) == true){
        markBoard(move,player)
        printBoard()
        if (checkFull()){
        console.log("It's a tie!")
        winnerIdentified = true
       }if (checkWin("X")== true){
        console.log("X wins!")
        winnerIdentified = true
       }
       if (checkWin("O")== true){
        console.log("O wins!")
        winnerIdentified = true
       }
    
       switch_user()
    }
    else{
        move = prompt(player + ", press any button to resume")
    }
}


// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');


let winnerIdentified = false

function switch_user(){
    if (currentTurnPlayer == 'X'){
        currentTurnPlayer = 'O'
    }else if(currentTurnPlayer == 'O'){
        currentTurnPlayer = 'X'
    }
}
while (!winnerIdentified){
    playTurn(currentTurnPlayer)
}
}
TicTacToe()


    // feel free to add logic here if needed, e.g. announcing winner or tie
    

// Bonus Point: Implement the feature for the user to restart the game after a tie or game over

function restart_game(){
    let restart = prompt("Do you want to play again? Choose Y(yes) or N(no): ")
    if (restart == 'Y'||'y'){
        return true
    }
    else if (restart == 'N'|| 'n'){
        return false
    }
    else{
    return false
    }
}
if (restart_game() == true){
    for(numposition in board){
        board[numposition] =" "
    }
    TicTacToe()
}else{
    console.log("See ya!")
}
