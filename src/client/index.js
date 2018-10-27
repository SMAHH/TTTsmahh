var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var currentPlayer = 'X';
//const secondPlayer = 'O';

function startGame(){

}

function resetButton() {

}

function switchPlayer(currentPlayer){
    if(currentPlayer == 'X'){
        return 'O';
    }
    else if(currentPlayer == 'O'){
        return 'X';
    }
    else{
      throw 'Invalid player';
    }
}

module.exports = {
  switchPlayer
}
