const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqObjects = function(object1, object2) {

  let result2 = false;

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
      

//   for (let elems2 in object2) {
//     let elementContents2 = object2[elems2];
//     let elementName2 = elems2;

//     if (elementName === elementName2){
//     if (elementContents === elementContents2) {
   
//       result2 = true 
//     } else {
//       if(Array.isArray(elementContents) && Array.isArray(elementContents2)) {
//        result2 = eqArrays(elementContents, elementContents2)
//       } else {
//         result2 = false
//       }
//     } 
//   }
//     }

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
