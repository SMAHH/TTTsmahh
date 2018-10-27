function gameStart (input){
    return(verifyInput(input));
}

function verifyInput (input){
    if(input == ""){
        return("No square chosen...");
    }
    if(isNaN(input)){
        return("Player must choose a integer...");
    }
    if(parseInt(input) < 1 || parseInt(input) > 9){
        return("Player must choose a integer from 1 - 9");
    }
    else{
        return(parseInt(input));
    }
}

function changeCell(board, currentPlayer, index){
  if(currentPlayer != 'X' && currentPlayer != 'O'){
    throw 'Invalid player';
  }
  else{
    if(board[index] == 'X' || board[index] == 'O'){
      return false;
    }
    else{
      board[index] = currentPlayer;
      return true;
    }
  }
}

function clearBoard(board){
  if(board.length == 9){
    for(var i = 0 ; i < 9 ; i++){
      board[i] = i;
    }
    return board;
  }
  else {
    return("Board must be 3x3");
  }
}

function switchPlayer (){

}

module.exports = {
  gameStart,
  clearBoard,
  changeCell
}
