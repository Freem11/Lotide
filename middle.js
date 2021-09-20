
const middle = function(actual) {
   
  let newArr = [];
  
  if (actual.length < 3) {
    newArr.push(undefined);
  } else if (actual.length % 2 === 0) {
    newArr.push(actual.length / 2);
    newArr.push((actual.length / 2) + 1);
  } else if (actual.length % 2 !== 0) {
    newArr.push(Math.ceil(actual.length / 2));
  }
  //console.log(newArr);
  return newArr;
};


module.exports = middle;
