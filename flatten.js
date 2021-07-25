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

let tempArray = [];
let flattened = [];
const flatten = function (toFlatten) {
  for(i = 0; i < toFlatten.length; i++){
    if(Array.isArray(toFlatten[i] && i < toFlatten.length -1)){
      tempArray += toFlatten[i].slice()+ ',';
    }else if(i < toFlatten.length -1){
      tempArray += (toFlatten[i]) +',';
    }else{
      tempArray += (toFlatten[i]);
    };
    console.log(tempArray)
  };
  flattened = tempArray.split`,`.map(x=>+x);
return flattened;
};

// console.log(flatten([1,2,[3,4,5],[8],9]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6,7])); // => [1, 2, 3, 4, 5, 6])