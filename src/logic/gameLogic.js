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

function checkForTie(board){
  for (var i = 0; i < board.length ; i++) {
    if(Number.isInteger(board[i])){
      return false;
    }
  }
  return true;
}

function checkForWin(currentPlayer, board){
  if(currentPlayer != 'X' && currentPlayer != 'O'){
    throw 'Invalid player';
  }
  else if(
    checkRow(0, 1, 2, currentPlayer, board) ||
    checkRow(3, 4, 5, currentPlayer, board) ||
    checkRow(6, 7, 8, currentPlayer, board) ||
    checkRow(0, 3, 6, currentPlayer, board) ||
    checkRow(1, 4, 7, currentPlayer, board) ||
    checkRow(2, 5, 8, currentPlayer, board) ||
    checkRow(0, 4, 8, currentPlayer, board) ||
    checkRow(2, 4, 6, currentPlayer, board)
  )
  {
    return true;
  }
  else{
    return false;
  }
}

function checkRow(a, b, c, currentPlayer, board){
  if(currentPlayer != 'X' && currentPlayer != 'O'){
    throw 'Invalid player';
  }
  if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
    if (board[a] == currentPlayer &&
        board[b] == currentPlayer &&
        board[c] == currentPlayer){
        return true;
    }
    return false;
  }
  else{
    throw 'Index must be an integer';
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

function incrementScore(score){
  if(Number.isInteger(score)){
    if(score < 0){
      throw "score can't be negative"
    }
    else{
      ++score;
      return score;
    }
  }
  else{
    throw 'score must be integer';
  }
}

module.exports = {
  verifyInput,
  clearBoard,
  switchPlayer,
  incrementScore,
  checkRow,
  checkForTie,
  checkForWin,
  changeCell
}
