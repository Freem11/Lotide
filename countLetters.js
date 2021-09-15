const assertEqual = function(actual, expected) {
  console.log(actual);
  console.log(expected);
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(allItems) {

  let obj = {};
  for (let ltrs in allItems) {
    let letterId = allItems[ltrs];

    if (letterId !== ' ') {

      if (obj[letterId]) {
        obj[letterId] += 1;
      } else {
        obj[letterId] = 1;
      }
    }
  }
  return obj;
};
    
countLetters("lighthouse in the house")
