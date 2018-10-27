var originalBoard;
var currentPlayer = 'X';
//const secondPlayer = 'O';


function startGame(){

}

function startGame(){

}

function resetButton() {

}


function turnClick(square){

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
