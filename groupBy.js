const isEqual = require('./isEqual.js').isEqual;

const groupLocation = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    const groupFirstElement = groups[index][0];
    if (isEqual(groupFirstElement, element)) {
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

const groupBy = function (list) {
  const groups = [];
  for (let index = 0; index < list.length; index++) {
    group(list[index], groups);
  }
  return groups;
};

const frequencyCount = function (list) {
  const groups = groupBy(list);
  const counts = [];
  for (let index = 0; index < groups.length; index++) {
    const element = groups[index][0];
    const elementFrequency = groups[index].length;
    counts.push([element, elementFrequency]);
  }
  return counts;
};

exports.areArraysEqual = isEqual;
exports.groupBy = groupBy;
exports.frequencyCount = frequencyCount;
