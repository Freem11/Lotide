
const assertObjectsEqual = function(actual, expected) {

  if (eqObjects(actual, expected)){
    console.log("✅✅✅ Assertion Passed: " ,actual, " === " ,expected);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: " ,actual, " !== " ,expected);
  }

};

const eqObjects = function(object1, object2) {

  let result2 = false;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
   return false 
   }
   
    for (let elems in object1) {
    let elementContents = object1[elems];
    let elementName = elems;

    if (Array.isArray(elementContents)) {
      result2 = eqArrays(elementContents, object2[elementName]);
    } else if (object1[elementName] !== object2[elementName]) {
      result2 = false;
      break;
    } else {
      result2 = true;
      
    }

  }
  
  return result2;
};

const eqArrays = function(actual, expected) {
   
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
  }

  return result;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false