const assertArraysEqual = require("./assertArraysEqual")

const words = ["Captain", "Jack", "Sparrow", "Black", "Pearl"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['C', 'J', 'S', 'B', 'P']);

module.exports = map;