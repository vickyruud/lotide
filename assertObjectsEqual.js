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
const assertObjectsEqual = function (actual,expected){
  const inspect = require('util').inspect; 
     
  if (eqObjects(actual,expected)) {
    return `🐕🐕🐕 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `😿😿😿 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`;
  };
}


module.exports = assertObjectsEqual

  
 