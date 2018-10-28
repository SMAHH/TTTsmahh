const gameLogic = require("./../src/logic/gameLogic");

// VERIFY INPUT

it("Should return a message if no integer is chosen", () => {
    expect(gameLogic.verifyInput("")).toBe("No square chosen...");
});

it("Should return a message if input isn't a integer", () => {
    expect(gameLogic.verifyInput("s4")).toBe("Player must choose a integer...");
});

it("Should return a message if invalid integer is chosen", () => {
    expect(gameLogic.verifyInput("9")).toBe("Player must choose a integer from 0 - 8");
});

it("Should return a valid chosen square", () => {
    expect(gameLogic.verifyInput("5")).toBe(5);
});

// CLEAR BOARD

it("Should return an array with incrementing numbers", () => {
    var board = [2, 5, 4, 6, 1, 1, 1, 6, 8];
    expect(gameLogic.clearBoard(board)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

it("Should return a message if the board is the wrong size", () => {
    var board = [2, 5, 4, 6, 1, 1, 1, 6, 8, 0];
    expect(gameLogic.clearBoard(board)).toBe("Board must be 3x3");
});

// CHANGE CELL

it("Should return an error if anything other than X or O is passed as currentPlayer", () => {
  var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  function insertWrongPlayer(){
    gameLogic.changeCell(board, 'G', 5);
  }
  expect(insertWrongPlayer).toThrow('Invalid player');
});

it("Should return false if a selected cell is already filled", () => {
  var board = [0, 1, 2, 3, 'X', 5, 6, 7, 8];
  expect(gameLogic.changeCell(board, 'X', 4)).toBeFalsy();
});

it("Should return true if a selected cell is not filled", () => {
  var board = [0, 1, 2, 3, 4, 'O', 6, 7, 8];
  expect(gameLogic.changeCell(board, 'X', 4)).toBeTruthy();
});

it("Should change the appropriate cell if is selected and not filled", () => {
  var board = [0, 1, 2, 3, 4, 'O', 6, 7, 8];
  function changeCell4(){
    gameLogic.changeCell(board, 'X', 4);
    return board;
  }
  expect(changeCell4()).toEqual([0, 1, 2, 3, 'X', 'O', 6, 7, 8]);
});

// SWITCH PLAYER

it("Should return return X if input is O and vice versa", () => {
    expect(gameLogic.switchPlayer('X')).toBe('O');
});

it("Should throw error if player is anything other than X or O", () => {
  function insertWrongPlayer(){
    var player = gameLogic.switchPlayer('M');
  }
    expect(insertWrongPlayer).toThrow('Invalid player');
});

// INCREMENT SCORE

it("Should throw error if score is not an integer", () => {
  function insertCharAsScore(){
    gameLogic.incrementScore('V');
  }
    expect(insertCharAsScore).toThrow('score must be integer');
});

it("Should throw error if score is negative", () => {
  function negativeScore(){
    gameLogic.incrementScore(-6);
  }
    expect(negativeScore).toThrow("score can't be negative");
});

it("Should increment score by 1", () => {
  var score = 6;
  function incrementScoreTest(){
    score = gameLogic.incrementScore(score);
    return score;
  }
    expect(incrementScoreTest()).toBe(7);
});

// CHECK ROW

it("Should return false if a row isn't completely filled with 1 player", () => {
  var board = [0, 1, 2, 3, 4, 'O', 6, 7, 8];
  expect(gameLogic.checkRow(0, 1, 3, 'O', board)).toBeFalsy();
});

it("Should return true if a row is completely filled with 1 player", () => {
  var board = ['X', 1, 2, 'X', 4, 'O', 'X', 7, 8];
  expect(gameLogic.checkRow(0, 3, 6, 'X', board)).toBeTruthy();
});

it("Should throw error if player is anything other than X or O", () => {
  var board = ['X', 1, 2, 'X', 4, 'O', 'X', 7, 8];
  function checkRowPlayerThrow(){
    gameLogic.checkRow(0, 3, 6, 'M', board)
  }
  expect(checkRowPlayerThrow).toThrow('Invalid player');
});

it("Should throw error if player is anything other than X or O", () => {
  var board = ['X', 1, 2, 'X', 4, 'O', 'X', 7, 8];
  function checkRowIndexThrow(){
    gameLogic.checkRow('g', 3, 6, 'O', board)
  }
  expect(checkRowIndexThrow).toThrow('Index must be an integer');
});

// CHECK FOR TIE
it("Should return true if it's a tie", () => {
  var board = ['O', 'X', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
  expect(gameLogic.checkForTie(board)).toBeTruthy();
})

it("Should return false if it's not a tie", () => {
  var board = ['O', 'X', 'X', 'O', 4, 'O', 'X', 'O', 'X'];
  expect(gameLogic.checkForTie(board)).toBeFalsy();
})

// CHECK FOR WIN

it("Should throw error if player is anything other than X or O", () => {
  var board = ['X', 1, 2, 'X', 4, 'O', 'X', 7, 8];
  function checkForWinPlayerThrow(){
    gameLogic.checkForWin('S', board)
  }
  expect(checkForWinPlayerThrow).toThrow('Invalid player');
});

 it("Should return false if the player hasn't won", () => {
   var board = ['X', 1, 2, 'X', 4, 'O', 'X', 7, 8];
   expect(gameLogic.checkForWin('O', board)).toBeFalsy();
 })

 it("Should return true if the player has won", () => {
   var board = ['X', 1, 2, 'X', 4, 'O', 'X', 7, 8];
   expect(gameLogic.checkForWin('X', board)).toBeTruthy();
 })
