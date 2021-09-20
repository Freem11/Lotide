
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs]", () => {
    assert.strictEqual(head.head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("returns '5' for ['5','6','7,]", () => {
    assert.strictEqual(head.head([5, 6, 7]), 5); 
  });
});
