
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
const actual = (tail(words));
console.log(assertEqual(actual, 2));