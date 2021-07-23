const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐕🐕🐕 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😿😿😿 Assertion Failed:  ${actual} !== ${expected}`;
  };
};
let isEqual = ' ';
const eqArrays = function (array1, array2){
  for (i = 0; i < array1.length; i++){
    for(j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]){
        isEqual = true;
      }else{
        isEqual = false;
      }
    };
  };
  return isEqual;
};
console.log (assertEqual(eqArrays([1, 2, 3], ["b", 2, 1]), true));// => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS