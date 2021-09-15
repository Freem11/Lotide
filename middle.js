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

const middle = function(actual) {
   
  let newArr = [];
  
  if (actual.length < 3) {
    newArr.push(undefined);
  } else if (actual.length % 2 === 0) {
    newArr.push(actual.length / 2);
    newArr.push((actual.length / 2) + 1);
  } else if (actual.length % 2 !== 0) {
    newArr.push(Math.ceil(actual.length / 2));
  }
  console.log(newArr);
  return newArr;
};

const actual = middle([1, 2, 3, 4]);
const expected = [2, 3];
assertArraysEqual(actual , expected); // => [2, 3]

const actual1 = middle([1, 2]);
const expected1 = [];
assertArraysEqual(actual1 , expected1); // =>

const actual2 = middle([1, 2, 3, 4, 5]);
const expected2 = [3];
assertArraysEqual(actual2 , expected2); // => [3]