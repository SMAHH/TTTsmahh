import './../styles/style.css';

var originalBoard;
var currentPlayer = 'X';
//const secondPlayer = 'O';
const cells = document.querySelectorAll('.cell');
startGame();

function startGame(){
    //document.querySelector(".endgame").style.display = "none";
    originalBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square){
    console.log(square.target.id);
    //square.innerHTML = firstPlayer;
    document.getElementById(square.target.id).innerText = currentPlayer;
    switchPlayer();
}

function switchPlayer(){
    if(currentPlayer == 'X'){
        currentPlayer = 'O';
    }
    else{
        currentPlayer = 'X';
    }
}

function component() {
    let element = document.createElement('div');
    //element.innerHTML = '<br><strong>Hello human...<br>Script is now connected</strong>';
    element.innerHTML = "<button onclick=\"startGame()\">Reset Game</button>";
//    return element;
}

document.body.appendChild(component());

