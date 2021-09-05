const findKey = (object, callback) =>{
  let array1 = Object.keys(object);
  for (const element of array1) {
    if (callback(object[element])) {
      return element;
    }
  }
};




module.exports = findKey;
