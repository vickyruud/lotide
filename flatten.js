const flatten = (toFlatten) => {
  const result = [];

  toFlatten.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flatten(item)); //  "..." pushes all elements from second array to the first
    } else {
      result.push(item);
    }
  });

  return result;
};


module.exports = flatten;