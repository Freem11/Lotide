
// const middle = require('../middle');

// const assertArraysEqual = require('../assertArraysEqual');


// const actual = middle([1, 2, 3, 4]);
// const expected = [2, 3];
// assertArraysEqual(actual , expected); // => [2, 3]

// const actual1 = middle([1, 2]);
// const expected1 = [];
// assertArraysEqual(actual1 , expected1); // =>

// const actual2 = middle([1, 2, 3, 4, 5]);
// const expected2 = [3];
// assertArraysEqual(actual2 , expected2); // => [3]

const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  });
  it("returns [] for [1, 2]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), [])); 
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); 
  });
});
