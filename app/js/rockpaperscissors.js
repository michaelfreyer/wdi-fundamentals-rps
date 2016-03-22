////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var answer = prompt();
    return answer;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move||getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move||randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    switch(playerMove) {
        case 'rock':
            
            if(computerMove === 'paper'){
            
            winner = 'computer';
            }
            
            else if (computerMove === 'scissors'){
                winner = 'player';
            }
        
            else if (computerMove === 'rock'){
                winner = 'tie';
            }
            
            else {
              console.log('Please pick a valid move');
              winner = 'No one';
            }
        
        break;

        case 'paper':

            if(computerMove === 'scissors'){
            
            winner = 'computer';
              
            }
            
            else if (computerMove === 'rock'){
                winner = 'player';
            }

            else if (computerMove === 'paper'){
                winner = 'tie';
            }
            
            else {
              console.log('Please pick a valid move');
              winner = 'No one';
            }



        break;

        case 'scissors':

        if(computerMove === 'rock'){
            
            winner = 'computer';
        }
            
            else if (computerMove === 'paper'){
                winner = 'player';
            }

            else if (computerMove === 'rock'){
                winner = 'tie';
            }
            
            else {
              console.log('Please pick a valid move');
              winner = 'No one';
            }
        

        break;

        default:
        console.log('Please pick a valid hand!');
    }


    return winner;
}

function playToX(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
// This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
    var playerMove;
    var computerMove;
    var result;
    
    while (computerWins < x && playerWins < x){
    
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    
    result = getWinner(playerMove, computerMove);
    
    if(result === 'player'){
        playerWins ++;
        console.log('Congrats! You won!');
    }
    else if (result === 'computer'){
        computerWins ++;
        console.log('Bummer! You lost');
    }
    else{
        console.log('It is a tie!');
        
    }
    
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    
    
    
   


    }
    }

playToX(1);


