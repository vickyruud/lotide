const assertArraysEqual = require("./assertArraysEqual");

const words = ["Captain", "Jack", "Sparrow", "Black", "Pearl"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;