const { expect } = require("@jest/globals");
const rng = require("../rng");

test("Generate numbers array has length", () => {
  expect(rng.generate()).toHaveLength(5);
});

test("Generate object size matches specified size", () => {
  const genObjectsSize = rng.generateObjects(8).size;
  expect(genObjectsSize).toBe(8);
});

test("Generate object is undefined if specified size is too small", () => {
  const genObjectsSize = rng.generateObjects(0);
  expect(genObjectsSize).toBeUndefined;
});
