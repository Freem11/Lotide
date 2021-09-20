const assertEqual = require("./assertEqual");

const tail = function (words) {
  return words.slice(1).length;
};

module.exports = { assertEqual, tail };
