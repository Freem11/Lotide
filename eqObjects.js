
// const assertEqual = require('./assertEqual');
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     // console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
//   } else {
//     // console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqObjects = function (object1, object2) {
  let result2 = false;

  for (let elems in object1) {
    let elementContents = object1[elems];
    let elementName = elems;

    if (Array.isArray(elementContents)) {
      if (object2[elementName]) {
        result2 = eqArrays(elementContents, object2[elementName]);
        if (result2 === false) {
          break;
        }
      } else {
        result2 = false
        break
      }
    } else if (object1[elementName] !== object2[elementName]) {
      result2 = false;
      break;
    } else {
      result2 = true;
    }
  }

  return result2;
};

module.exports = eqObjects;

const eqArrays = function (actual, expected) {
  let result = false;

  if (actual.length !== expected.length) {
    result = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    // if (actual.length > expected.length) {
    //   useVal = actual.length
    // } else if(actual.length < expected.length) {
    //   useVal = expected.length
    // } else if(actual.length === expected.length) {
    //   useVal = actual.length
    // }
  }

  return result;
};


