
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(words) {
  return words.slice(1).length;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const actual = (tail(words));
assertEqual(actual, 2);
