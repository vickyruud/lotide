const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `πππ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `πΏπΏπΏ Assertion Failed:  ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;
 

