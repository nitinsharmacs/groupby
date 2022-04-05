const testFnPath = '../../classroom/string-assignments-nitinsharmacs/tests/utility';
const generalTestFuctions = require(testFnPath + '/generalTestFunctions.js');
const testReport = require(testFnPath + '/testReport.js');
const groupByLib = require('./groupBy.js');

const groupBy = groupByLib.groupBy;
const areArraysEqual = groupByLib.areArraysEqual;

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
    ['Same Arrays and numbers', [[1, 1], [[1, 1], [1, 1]]], [[1, 1], 1, [1, 1], 1]],
    ['Same arrays and string', [[[1, 2], [1, 2]], ['1,2', '1,2']], [[1, 2], '1,2', '1,2', [1, 2]]],
    ['Numbers and strings', [['a', 'a'], ['b'], [1], [2], ['1']], ['1', 2, 1, 'a', 'b', 'a']],
    ['Empty arrays and numbers', [[[], []], [1], [2]], [[], 2, 1, []]],
    ['Only same arrays', [[[1, 2], [1, 2]]], [[1, 2], [1, 2]]],
    ['Nested Arrays', [[[[1], [2]], [[1], [2]]]], [[[1], [2]], [[1], [2]]]]
  ];
  for (let index = 0; index < tests.length; index++) {
    testGroupBy(tests[index][0], tests[index][1], tests[index][2]);
  }
  // testGroupBy('Present in a single letter string', true, 'n', 'n');
  // testGroupBy('Not present in a single letter string', false, 't', 'n');

  // testGroupBy('Present in a multiple letters string', true, 'n', 'on');
  // testGroupBy('Not present in a multiple letters string', false, 't', 'on');

  // testGroupBy('Present substring in a string', true, 'll', 'hello');
};

const allTests = function () {
  groupByTests();
  const report = testReport.generateTestReport(getTests());
  testReport.displayReport(report);
}

allTests();
