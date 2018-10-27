const index = require("./../src/client/index");

it("Should return return X if input is O and vice versa", () => {
    expect(index.switchPlayer('X')).toBe('O');
});
