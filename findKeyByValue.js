const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
  } else {
    //console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(input, show) {

  for (let tvShows in input) {
    let showName = input[tvShows];
    let genre = tvShows;
 
    if (showName === show) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;