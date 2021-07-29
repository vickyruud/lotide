let isEqual = '';
const assertArraysEqual = function (array1, array2){
  for (i = 0; i < array1.length; i++){
    for(j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]){
        isEqual = `🐕🐕🐕 Assertion Passed: ${array1} === ${array2}`;
      }else{
        isEqual = `😿😿😿 Assertion Failed:  ${array1} !== ${array2}`;
      }
    };
  };
  return isEqual;
};

const assertEqual = function(actual, expected) {
  if (isEqual) {
    return `🐕🐕🐕 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😿😿😿 Assertion Failed:  ${actual} !== ${expected}`;
  };
};

const letterPositions = function(sentence) {
  const finalObject = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (finalObject[sentence[i]]) {
        finalObject[sentence[i]].push(i);
      }  else {
        finalObject[sentence[i]] = [i];
      }
    }
  }
  return finalObject;
};
// console.log(letterPositions('Hello'));

console.log(letterPositions('Hello World'));

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
