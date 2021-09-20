
const tail = require('../tail');

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
const actual = (tail.tail(words));
console.log(tail.assertEqual(actual, 2));