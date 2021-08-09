let newArray = [];
const tail = function(value) {
  newArray = value;
  newArray = newArray.slice(1);
  return newArray;
};

module.exports = tail;


