
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
  //console.log(obj);
  return obj;
};
    
module.exports = countOnly;




