const game = require('./../logic/gameLogic');
var prompt = require('prompt');
var clear = require('clear');
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var currentPlayer = 'X';
var Xscore = 0;
var Oscore = 0;

function startGame(){
  prompt.start();
  board = game.clearBoard(board);
  currentPlayer = 'X';
  printBoard();
  inputPlayerMove(currentPlayer); 
}

function playerMove(player, input){
  
    if(!isNaN(input))
    {
      if(Number.isInteger(board[input]))
      {
        board[input] = player;
        printBoard();
        if(game.checkForWin(player, board))
        {
          console.log(player +' WINS!');
          return inputNewGame();
        }
        if(game.checkForTie(board))
        {
          console.log('The game is tied');
          return inputNewGame();
        }
        currentPlayer = game.switchPlayer(player);
        return inputPlayerMove(currentPlayer);
      }
      else
      {
        printBoard();
        console.log('Square is taken, select another...')
        return inputPlayerMove(player);
      }
    }
    else
    {
      printBoard();
      console.log(input);
      return inputPlayerMove(player);
    }
}

function newGame(playerInput){
  
    if(playerInput == 'y' || playerInput == 'Y'){
      startGame(); 
    }
    else{
      return;

    }
}

function printBoard() {
  clear();
    console.log('\n\n\n' +
        ' ' + board[0] + ' | ' + board[1] + ' | ' + board[2] + '\n' +
        ' ---------\n' +
        ' ' + board[3] + ' | ' + board[4] + ' | ' + board[5] + '\n' +
        ' ---------\n' +
        ' ' + board[6] + ' | ' + board[7] + ' | ' + board[8] + '\n');
}

function inputNewGame() {
  var playerInput = '';
  console.log('Do you want to play again? y/n');

  prompt.get(['newGame'], function (err, result) {
    console.log(' ' + result.newGame);
    playerInput = result.newGame.charAt(0);
   
    return newGame(playerInput);
  });
}

function inputPlayerMove(player) {
  console.log("Player turn is " +player);
  prompt.get(['position'], function(err, result)
  {
    var input = game.verifyInput(result.position);

    return playerMove(player, input);
  });
}

module.exports = {
  startGame,
  playerMove,
  newGame,
  inputPlayerMove,
  inputNewGame,
  board
}
