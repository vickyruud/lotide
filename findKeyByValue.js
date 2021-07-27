const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐕🐕🐕 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😿😿😿 Assertion Failed:  ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function (object, val){
  return Object.keys(object).find(key => object[key] === val);
} 

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), undefined));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
