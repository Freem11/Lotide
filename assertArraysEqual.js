
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " ,actual, " === " ,expected);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: " ,actual, " !== " ,expected);
  }
};


const eqArrays = function(actual, expected) {

  let result = "";

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};
// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);