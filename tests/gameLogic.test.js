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

//Check for Winner

it("Check for winner", () => {    
    //var expected = ({1: 'X', 2: 'X', 3: 'X'});
	expect(gameLogic.checkForWinner('X')).toBe(true);
});

