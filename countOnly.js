
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {

  let obj = {};
  for (let fstNames in allItems) {
    let otherNewName = allItems[fstNames];

    for (let compNames in itemsToCount) {
      let useOrNot = itemsToCount[compNames];
      let useOrNotName = compNames;

      if ((useOrNot === true) && (useOrNotName === otherNewName)) {

        if (obj[useOrNotName]) {
          obj[useOrNotName] += 1;
        } else {
          obj[useOrNotName] = 1;
        }
         

      }

    }
  }
  console.log(obj);
  return obj;
};
    



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
