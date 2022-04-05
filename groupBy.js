const areBothArrays = function (array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

const areEqual = function (element1, element2) {
  if (areBothArrays(element1, element2)) {
    return areArraysEqual(element1, element2);
  }
  return element1 === element2;
};

const groupLocation = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    const groupFirstElement = groups[index][0];
    if (areEqual(groupFirstElement, element)) {
      return index;
    }
  }
  return -1;
};

const group = function (element, groups) {
  const location = groupLocation(element, groups);
  if (location < 0) {
    groups.push([element])
    return groups;
  }
  groups[location].push(element);
  return groups;
};

const groupBy = function (set) {
  const groups = [];
  for (let index = 0; index < set.length; index++) {
    group(set[index], groups);
  }
  return groups;
};

const frequencyCount = function (set) {
  const groups = groupBy(set);
  const counts = [];
  for (let index = 0; index < groups.length; index++) {
    counts.push([groups[index][0], groups[index].length]);
  }
  return counts;
};

exports.areEqual = areEqual;
exports.areArraysEqual = areArraysEqual;
exports.groupBy = groupBy;
exports.frequencyCount = frequencyCount;
