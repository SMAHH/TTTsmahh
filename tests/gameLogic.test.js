const gameStart = require("./gameLogic");

it("Should return a message if no integer is chosen", () => {
    expect(gameStart("")).toBe("No square chosen...");
});

it("Should return a message if input isn't a integer", () => {
    expect(gameStart("s4")).toBe("Player must choose a integer...");
});

it("Should return a message if invalid integer is chosen", () => {
    expect(gameStart("0")).toBe("Player must choose a integer from 1 - 9");
});

it("Should return a valid chosen square", () => {
    expect(gameStart("5")).toBe(5);
});
