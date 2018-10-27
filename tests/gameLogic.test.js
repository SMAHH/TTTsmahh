const gameLogic = require("./../src/logic/gameLogic");

it("Should return a message if no integer is chosen", () => {
    expect(gameLogic.gameStart("")).toBe("No square chosen...");
});

it("Should return a message if input isn't a integer", () => {
    expect(gameLogic.gameStart("s4")).toBe("Player must choose a integer...");
});

it("Should return a message if invalid integer is chosen", () => {
    expect(gameLogic.gameStart("0")).toBe("Player must choose a integer from 1 - 9");
});

it("Should return a valid chosen square", () => {
    expect(gameLogic.gameStart("5")).toBe(5);
});

it("Should return an array with incrementing numbers", () => {
    var board = [2, 5, 4, 6, 1, 1, 1, 6, 8];
    expect(gameLogic.clearBoard(board)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

it("Should return a message if the board is the wrong size", () => {
    var board = [2, 5, 4, 6, 1, 1, 1, 6, 8, 0];
    expect(gameLogic.clearBoard(board)).toBe("Board must be 3x3");
});

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
