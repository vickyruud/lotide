
const eqArrays = require("./eqArrays");


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let output = false;
  if (keys1.length === keys2.length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && object1[element] === object2[element]) {
        output = true;
      } else if (Array.isArray(object1[element] && Array.isArray(object2[element]))) {
        output = eqArrays(object1[element], object2[element]);
      } else {
        output = false;
      }
    });
  }
  return output;
};



module.exports = eqObjects;