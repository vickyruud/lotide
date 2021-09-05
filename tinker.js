deepEqual = (object1 , object2) => {
  if( object1 === object2) {
    return true;
  }
  if( object1 === null || object2 === null || typeof object2 != "object") {
    return false
  }
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length != keys2.length) {
    return false
  }

  for (let key of keys1) {
    if(!keys2.includes[key] || !deepEqual(object1[key], object2[key])) return false;
  }
  return true;

}

console.log(deepEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) );
console.log(deepEqual({ a: { z: { d: 3 } } }, { a: { z: { d: 3 } } }));