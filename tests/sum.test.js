const add = require("./../src/sum.js");

it("should return the sum of 2 numbers", () => {
  expect(add(2,5)).toBe(7);
});
