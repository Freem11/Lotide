
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns '2' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail.tail(["Yo Yo", "Lighthouse", "Labs"]), 2);
  });
  it("returns '3' for ['1', '2', '3', '4']", () => {
    assert.strictEqual(tail.tail(['1', '2', '3', '4']), 3);
  });
});
