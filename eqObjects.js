
const eqArrays = require("./eqArrays");


const eqObjects = function(object1, object2) {
  let output = true;
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length){
    output = output && false;
  }else for(let key in object1){
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      output = output && (eqArrays(object1[key], object2[key]));
    }else if(typeof object1[key]=== "object" || typeof(object2[key]) === "object"){
      output = output && eqObjects(object1[key], object2[key]);
    }else if (object1[key] !== object2[key]) output = output && false;
  }
  return output;
  };

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) );