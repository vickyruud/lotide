const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐕🐕🐕 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😿😿😿 Assertion Failed:  ${actual} !== ${expected}`;
  }
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let length1 = Object.keys(object1).length;
  let length2 = Object.keys(object2).length
  if (length1 !== length2){
    return false;
  };
    if(Array.isArray(object1) && Array.isArray(object2)){
      return eqArrays(object1, object2);
    }else if (Object.keys(object1).length ===1) {
      if (object1 === object2){
        return true;
      }else{
        return false;
      };
    };
    for( key of Object.keys(object1)){
      if(Object.keys(object2).includes(key)){
        if(!eqObjects(object1[key],object2[key]))
        return false;
      }
    }
    return true;
  };
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba)); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
  console.log(eqObjects(ab, abc)); // => false
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  console.log((eqObjects(cd, dc))); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  console.log(assertEqual(eqObjects(cd, cd2), true)); // => false
