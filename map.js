
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

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.slice(1));
console.log(results2);


assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2,[ 'round', 'ontrol', 'o', 'ajor', 'om' ])
