import './../styles/style.css';

var originalBoard;
var currentPlayer = 'X';
var gameOver;
//const secondPlayer = 'O';
const cells = document.querySelectorAll('.cell');


startGame();

function startGame(){
    gameOver = false;
    //document.querySelector(".endgame").style.display = "none";
    originalBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].addEventListener('click', turnClick, false);
    }
}

function resetButton() {
    let element = document.createElement('div');
    element.innerHTML = "<button id=\"resButton\">Reset Game</button>";
    element.addEventListener('click', startGame, false);
    return element;
}

document.body.appendChild(resetButton());

function turnClick(square){
    console.log(square.target.id);
    if(square.target.innerText == ''){
        console.log("input player " +currentPlayer);
        document.getElementById(square.target.id).innerText = currentPlayer;
        switchPlayer();
    }
}

function switchPlayer(){
  if(checkForWinner(currentPlayer)){
      console.log(currentPlayer + ' Wins!');
      for (var i = 0; i < cells.length; i++){
          cells[i].removeEventListener('click', turnClick, false);
      }
  }
  else if(checkForTie()){
      console.log('Its a Tie!');
      for (var i = 0; i < cells.length; i++){
          cells[i].removeEventListener('click', turnClick, false);
      }
  }
  else{
    if(currentPlayer == 'X'){
        currentPlayer = 'O';
    }
    else{
        currentPlayer = 'X';
    }
  }
}

function checkForWinner(player){
    if(checkRow(0, 1, 2, player)  ||
        checkRow(3, 4, 5, player)  ||
        checkRow(6, 7, 8, player)  ||
        checkRow(0, 3, 6, player)  ||
        checkRow(1, 4, 7, player)  ||
        checkRow(2, 5, 8, player)  ||
        checkRow(0, 4, 8, player)  ||
        checkRow(2, 4, 6, player))  {
        return gameOver;
    }
    return false;

}

function checkRow(a, b, c, player){
    if (cells[a].innerText == player &&
        cells[b].innerText == player &&
        cells[c].innerText == player){
        gameOver = true;
    }
    return gameOver;
}

function checkForTie(){
    var result = true;
    for(var i = 0; i < cells.length; i++){
        if (cells[i].innerText == ''){
            result = false;
        }
    }
    return result;
}

module.exports = {
  startGame,
  switchPlayer,
  checkRow
}
