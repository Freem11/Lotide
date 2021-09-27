const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// TEST CODE


describe("#eqArrays", () => {
  it("returns true for '[1, 2, 3], [1, 2, 3]'", () => {
    assert.strictEqual(eqArrays.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true for '[1, 2, 3], [3, 2, 1]'", () => {
    assert.strictEqual(eqArrays.eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true for '['1', '2', '3'], ['1', '2', '3']'", () => {
    assert.strictEqual(eqArrays.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns true for '['1', '2', '3'], ['1', '2', 3]'", () => {
    assert.strictEqual(eqArrays.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});