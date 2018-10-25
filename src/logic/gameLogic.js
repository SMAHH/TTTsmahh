function gameStart (){
    for(var i = i; i <= 9; i++){
        clearBox(i);
    }
    document.turn = 'X';
    document.winner = null;
    setMessage(document.turn + " get's to start!")
}

function setMessage(msg){
    document.getElementById("message").innerText = msg;
}


function nextMove(cell){
    if(document.winner != null){
        setMessage(document.turn + " Already won!")
    }
    else if(cell.innerText == ''){
        cell.innerText = document.turn;
        switchTurn();
    }
    else{
        setMessage("Pick another square!")
    }
}

function switchTurn(){
    if(checkForWinner(document.turn)){
        setMessage("Congrats " + document.turn + " , YOU WON!!")
        document.winner = document.turn;
    }
    else if(document.turn == "X"){
        document.turn = "0";
        setMessage("It's " + document.turn + "'s turn!")
    }
    else{
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!")
    }
}

function checkForWinner(move){
    var result = false;
    //var move = 'X';
    if(checkRow(1, 2, 3, move)  ||
        checkRow(4, 5, 6, move)  ||
        checkRow(7, 8, 9, move)  ||
        checkRow(1, 4, 7, move)  ||
        checkRow(2, 5, 8, move)  ||
        checkRow(3, 6, 9, move)  ||
        checkRow(1, 5, 9, move)  ||
        checkRow(3, 5, 7, move))  {
        result = true;
    }
        return result; 
}

function checkRow(a, b, c, move){
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

function getBox(number){
    return document.getElementById("s" + number).innerText;
}

function clearBox(number){
    document.getElementById("s" + number).innerText = "";
}


/*
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
*/
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

//function switchPlayer (){
  //  console.log("game switches player here...");
//}

module.exports = {
  gameStart,
  clearBoard,
  checkForWinner,
  checkRow
}
