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

const takeUntil = function(array, callback) {

  const results = [];
  for (let item of array) {
   
    if (callback(item) !== true) {
      results.push(item);
    } else {
      return results;
    }
  }

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);