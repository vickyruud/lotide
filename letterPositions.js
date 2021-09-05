const assertArraysEqual = require("./assertArraysEqual")

const letterPositions = function(sentence) {
  const finalObject = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (finalObject[sentence[i]]) {
        finalObject[sentence[i]].push(i);
      }  else {
        finalObject[sentence[i]] = [i];
      }
    }
  }
  return finalObject;
};


module.exports = letterPositions;