const index = require("./../src/client/index");

// playerMove

it("Should call itself if input is NAN", () => {
    expect(index.playerMove('X',' ')).toBe(index.inputPlayerMove('X'));
});

it("Should call itself if input is not an integer", () => {
    expect(index.playerMove('X','b')).toBe(index.inputPlayerMove('X'));
});

it("Should call inputNewGame if a player wins", () => {
    index.board = ['X', 'X', 2, 3, 4, 5, 6, 7, 8];
    expect(index.playerMove('X','2')).toBe(index.inputNewGame());
});

it("Should call inputNewGame if the game is tied", () => {
    index.board = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 8];
    expect(index.playerMove('X','8')).toBe(index.inputNewGame());
});

it("Should switch player if a legal move is performed", () => {
    expect(index.playerMove('X','1')).toBe(index.inputPlayerMove('O'));
});

//newGame

it("Should return a call to startGame if player chooses yes", () => {
    expect(index.newGame('y')).toBe(index.startGame());
});