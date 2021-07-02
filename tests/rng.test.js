const { expect } = require("@jest/globals");
const rng = require("../rng");

test("Generate numbers array has length", () => {
  const numbersToGenerate = 6;
  expect(rng.generate(numbersToGenerate).randomNumbers).toHaveLength(
    numbersToGenerate
  );
});

test("Generate object size matches specified size", () => {
  const genObjectsSize = rng.generateObjects(8).size;
  expect(genObjectsSize).toBe(8);
});

test("Generate object is undefined if specified size is too small", () => {
  const genObjectsSize = rng.generateObjects(0);
  expect(genObjectsSize).toBeUndefined;
});
