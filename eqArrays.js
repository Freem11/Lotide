
const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected) {


    let result = true

    for (i = 0; i < actual.length; i++){
    if (actual[i] === expected[i]){
      result = true;
    } else {
      result = false;
    }  
}
return result;
}

module.exports = {assertEqual, eqArrays};

