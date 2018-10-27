const index = require("./../src/client/index");

it("Should return return X if input is O and vice versa", () => {
    expect(index.switchPlayer('X')).toBe('O');
});

it("Should throw error if player is anything other than X or O", () => {
  function insertWrongPlayer(){
    var player = index.switchPlayer('M');
  }
    expect(insertWrongPlayer).toThrow('Invalid player');
});
