
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

const letterPositions = function(sentence) {
  let obj = {};
  for (let ltrs in sentence) {
    let letterId = sentence[ltrs];
    let pos = Number(ltrs)
   

    if (letterId !== ' ') {

      if (obj[letterId]) {
        obj[letterId].push(pos)
      } else {
        obj[letterId] = [pos];
      }
    }
    
  }
  console.log(obj)
  return obj;
};


letterPositions("lighthouse in the house")