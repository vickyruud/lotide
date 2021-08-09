
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
module.exports = eqArrays;