const { expect } = require("@jest/globals");
const generate = require("../rng");

test("Generate numbers array is not empty", () => {
  expect(generate()).toHaveLength(5);
});
