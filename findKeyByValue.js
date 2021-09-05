const assertEqual = require ("./assertEqual");

const findKeyByValue = function (object, val){
  return Object.keys(object).find(key => object[key] === val);
} 


module.exports = findKeyByValue;