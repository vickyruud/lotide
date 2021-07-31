const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`);
  }
};


const findKey = (object, callback) =>{
  let array1 = Object.keys(object);
  console.log(array1);
  for (element of array1){
    if(callback(object[element])){
      return element;
    };
  }  
};


console.log(assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), 'Ora'));
