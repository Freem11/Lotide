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

assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1, });