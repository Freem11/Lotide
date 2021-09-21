
const letterPositions = function(sentence) {
  let obj = {};
  for (let ltrs in sentence) {
    let letterId = sentence[ltrs];
    let pos = Number(ltrs)
   

    if (letterId !== ' ') {

      if (obj[letterId]) {
        obj[letterId].push(pos)
      } else {
        obj[letterId] = [pos];
      }
    }
    
  }
  //console.log(obj)
  return obj;
};

module.exports = letterPositions;