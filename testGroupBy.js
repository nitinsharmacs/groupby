const testFnPath = '../../classroom/string-assignments-nitinsharmacs/tests/utility';
const generalTestFuctions = require(testFnPath + '/generalTestFunctions.js');
const testReport = require(testFnPath + '/testReport.js');
const groupByLib = require('./groupBy.js');

const areArraysEqual = groupByLib.areArraysEqual;
const groupBy = groupByLib.groupBy;
const frequencyCount = groupByLib.frequencyCount;

// general test functions
const pushResult = generalTestFuctions.pushResult;
const getTests = generalTestFuctions.getTests;

const testGroupBy = function (description, expected, set) {
  const actual = groupBy(set);
  const isPassed = areArraysEqual(expected, actual);

  pushResult(isPassed, 'groupBy', description, expected, actual);
  return isPassed;
};

const groupByTests = function () {
  // description, expected, input
  const tests = [
    ['Empty set', [], []],
    ['Set of numbers', [[1, 1], [2]], [1, 2, 1]],
    ['Same Arrays and numbers', [[[1, 1], [1, 1]], [1, 1]], [[1, 1], 1, [1, 1], 1]],
    ['Same arrays and string', [[[1, 2], [1, 2]], ['1,2', '1,2']], [[1, 2], '1,2', '1,2', [1, 2]]],
    ['Numbers and strings', [['1'], [2], [1], ['a', 'a'], ['b']], ['1', 2, 1, 'a', 'b', 'a']],
    ['Empty arrays and numbers', [[[], []], [2], [1]], [[], 2, 1, []]],
    ['Only same arrays', [[[1, 2], [1, 2]]], [[1, 2], [1, 2]]],
    ['Nested arrays', [[[[1, [3]], [2]], [[1, [3]], [2]]]], [[[1, [3]], [2]], [[1, [3]], [2]]]],
    ['Nested array and number', [[[[1], 2], [[1], 2]]], [[[1], 2], [[1], 2]]]
  ];
  for (let index = 0; index < tests.length; index++) {
    testGroupBy(tests[index][0], tests[index][1], tests[index][2]);
  }
};

const testFrequencyCount = function (description, expected, set) {
  const actual = frequencyCount(set);
  const isPassed = areArraysEqual(expected, actual);

  pushResult(isPassed, 'frequencyCount', description, expected, actual);
  return isPassed;
};

const frequencyCountTests = function () {
  const tests = [
    ['Empty set', [], []],
    ['Set of numbers', [[1, 2], [2, 1]], [1, 2, 1]],
    ['Same Arrays and numbers', [[[1, 1], 2], [1, 2]], [[1, 1], 1, [1, 1], 1]],
    ['Same arrays and string', [[[1, 2], 2], ['1,2', 2]], [[1, 2], '1,2', '1,2', [1, 2]]],
    ['Numbers and strings', [['1', 1], [2, 1], [1, 1], ['a', 2], ['b', 1]], ['1', 2, 1, 'a', 'b', 'a']],
    ['Empty arrays and numbers', [[[], 2], [2, 1], [1, 1]], [[], 2, 1, []]],
    ['Only same arrays', [[[1, 2], 2]], [[1, 2], [1, 2]]],
    ['Nested element arrays', [[[[1], [2]], 2]], [[[1], [2]], [[1], [2]]]]
  ];
  for (let index = 0; index < tests.length; index++) {
    testFrequencyCount(tests[index][0], tests[index][1], tests[index][2]);
  }
};

const allTests = function () {
  groupByTests();
  frequencyCountTests();
  const report = testReport.generateTestReport(getTests());
  testReport.displayReport(report);
}

allTests();
