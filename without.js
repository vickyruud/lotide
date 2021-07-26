const without = function(source, itemsToRemove) {
  for(let i = 0; i < itemsToRemove.length; i++){
    let arraylength = source.length;
    for(let j = 0; j < arraylength; j++){
      if(itemsToRemove[i] === source[j]){
        source = source.slice(0,j).concat(source.slice(j+1, arraylength));
      }
    }
  };
  return source;
  };

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


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words);
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));