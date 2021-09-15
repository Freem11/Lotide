const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " ,actual, " === " ,expected);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: " ,actual, " === " ,expected);
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

const without = function(actual, expected) {
  let newArr = [...actual];
   
  for (let i = 0; i < actual.length; i++) {
    for (let j = 0; j < expected.length; j++) {

      if (expected[j] === actual[i]) {
        
        newArr.splice(i,1);
      }
    }
  }

  return newArr;
};
// TEST CODE

const words = ["hello", "world", "lighthouse"];
const notwords = without(words, ["lighthouse"]);
assertArraysEqual(notwords,["hello", "world"]);

const actual1 = without([1, 2, 3], [1]);
const expected1 = [2, 3];
assertArraysEqual(actual1 , expected1); // => [2, 3]

const actual = without(["1", "2", "3"], [1, 2, "3"]);
const expected = ["1", "2"];
assertArraysEqual(actual, expected); // => ["1", "2"]
