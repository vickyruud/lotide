const eqArrays = function(array1, array2) {
  let isEqual = true;
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) || Array.isArray(array2[i])) {
      isEqual = isEqual && eqArrays(array1[i], array2[i]);
    } else if (array1[i] !== array2[i]) {
      isEqual = isEqual && false;
    }
  }
  return isEqual;
};

module.exports = eqArrays;

