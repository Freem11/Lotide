const assert = require('chai').assert;
const eqObjects  = require('../eqObjects');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false


describe("#eqObjects", () => {
  it("returns true for 'cd , dc'", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns true for 'cd , cd2'", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});