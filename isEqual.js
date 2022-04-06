const areBothArrays = function (array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
};

const isEqual = function (lhs, rhs) {
  if (!areBothArrays(lhs, rhs)) {
    return lhs === rhs;
  }
  if (lhs.length !== rhs.length) {
    return false;
  }
  for (let index = 0; index < lhs.length; index++) {
    if (!isEqual(lhs[index], rhs[index])) {
      return false;
    }
  }
  return true;
};

exports.isEqual = isEqual;
