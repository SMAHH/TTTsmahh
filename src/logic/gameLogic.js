
// Fall sem að athugar hvort að input frá notanda sé löglegt
function verifyInput (input){
    if(input == ""){
        return("No square chosen...");
    }
    if(isNaN(input)){
        return("Player must choose a integer...");
    }
    if(parseInt(input) < 0 || parseInt(input) > 8){
        return("Player must choose a integer from 0 - 8");
    }
    else{
        return(parseInt(input));
    }
}

// Fall sem að athugar hvort að borðið sé orðið full og þar af leiðandi er jafntefli
function checkForTie(board){
  for (var i = 0; i < board.length ; i++) {
    if(Number.isInteger(board[i])){
      return false;
    }
  }
  return true;
}

// Fall sem athugar hvort að leikmaður hafi náð 3 x eða o í röð og hafi þar af leiðandi unnið leikinn
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

// Hjálparfall fyrir checkForWin sem að skoðar eina röð og athugar hvort að reitirnir í henni innihaldi allir sama táknið
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

// Fall sem að breytir reit úr tölu yfir í tákn leikmanns
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

// Fall sem endursetur leikborðið
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

//Fall sem sér um að skipta um leikmann á milli umferða
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

// Fall sem sér um að hækka stigafjölda leikmanns eftir hvern leik
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
