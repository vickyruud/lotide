const assertArraysEqual = require("./assertArraysEqual")

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
  };
  flattened = tempArray.split`,`.map(x=>+x);
return flattened;
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6,7])); // => [1, 2, 3, 4, 5, 6])

module.exports = flatten;