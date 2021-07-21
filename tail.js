const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐕🐕🐕 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😿😿😿 Assertion Failed:  ${actual} !== ${expected}`;
  }
};

const words = ["Yo Yo", "Lighthouse" , "Labs"];
let newArray = [];
const tail = function(value) {
  newArray = value;
  newArray = newArray.slice(1);
  return newArray;
};


tail(words);
console.log(words);
console.log(assertEqual(words.length, 3));
console.log(newArray);