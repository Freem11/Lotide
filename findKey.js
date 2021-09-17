const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {

  for (let names in object) {
    const starName = names;
    const stars = object[names];

    if (callback(stars)) {
      return starName;
    }
  }
};

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const finalResult = findKey(obj, x => x.stars === 2); // => "noma"
const finalResult1 = findKey(obj, x => x.stars === 3); // => "noma"
const finalResult2 = findKey(obj, x => x.stars === 0); // => "noma"

assertEqual(finalResult,"noma");
assertEqual(finalResult1,"Akaleri");
assertEqual(finalResult2, undefined);