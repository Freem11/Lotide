
const eqArrays = require('../eqArrays');

// TEST CODE

console.log(eqArrays.assertEqual(eqArrays.eqArrays([1, 2, 3], [1, 2, 3]), true)) // => true
console.log(eqArrays.assertEqual(eqArrays.eqArrays([1, 2, 3], [3, 2, 1]), false)) // => false

console.log(eqArrays.assertEqual(eqArrays.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)) // => true
console.log(eqArrays.assertEqual(eqArrays.eqArrays(["1", "2", "3"], ["1", "2", 3]), false)) // => false