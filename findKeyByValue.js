const findKeyByValue = (object, val) => {
  return Object.keys(object).find(key => object[key] === val);
};


module.exports = findKeyByValue;