const words = ["Captain", "Jack", "Sparrow", "Black", "Pearl"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ['C', 'J', 'S', 'B', 'P']));

