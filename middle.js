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
  return isEqual
};
console.log(isEqual);
const assertEqual = function(actual, expected) {
  if (isEqual) {
    return  '👍' + `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return  '😢' +  `Assertion Failed:  ${actual} !== ${expected}`;
  };
};

// console.log (assertEqual(eqArrays([1, 2, 3], [1]), true));// => false
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

const middle = function (array){
  //if length is odd, divide length by 2 and return the middle
  // if length is even, divide length by 2 and rturn math floor and math ceiling
  /// if length is less than or equal to 2 return empty array
  let midValue   = [];
  let length = array.length;
  let i = '';
  let j = '';
  if(length % 2 !== 0 && length >= 3){
    i = Math.floor(length / 2);
    midValue = array.slice(i, i + 1 );
  }else if (length % 2 === 0 ){
    i = Math.floor(length / 2);
    j = Math.ceil(length / 2);
    midValue = array.slice(i -1 ,j + 1);
  }else if(length < 3)  {
    midValue = [];

  };
  return midValue;
};
console.log(assertEqual(eqArrays(middle([1,2,3,4,5,6]), [3,4]), true));
