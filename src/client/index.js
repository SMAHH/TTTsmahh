const game = require('./../logic/gameLogic');
var prompt = require('prompt');
var clear = require('clear');
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var currentPlayer = 'X';
var Xscore = 0;
var Oscore = 0;

function startGame(){
  game.clearBoard(board);
  printBoard();
  playerMove(currentPlayer);

}

function playerMove(player){
  console.log("Player turn is " +player);
  prompt.start();
  prompt.get(['position'], function(err, result)
  {
    var input = game.verifyInput(result.position);
    if(!isNaN(input))
    {
      if(Number.isInteger(board[input]))
      {
        board[input] = player;
        printBoard();
        if(game.checkForWin(player, board))
        {
          console.log(player +' WINS!');
          return;
        }
        if(game.checkForTie(board))
        {
          console.log('The game is tied');
          return;
        }
        currentPlayer = game.switchPlayer(player);
        playerMove(currentPlayer);
      }
      else
      {
        printBoard();
        console.log('Square is taken, select another...')
        playerMove(player);
      }
    }
    else
    {
      printBoard();
      console.log(input);
      playerMove(player);
    }
  });
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

module.exports = {
  startGame
}
