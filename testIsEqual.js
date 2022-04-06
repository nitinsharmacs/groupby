const testFnPath = '../../classroom/string-assignments-nitinsharmacs/tests/utility';
const generalTestFuctions = require(testFnPath + '/generalTestFunctions.js');
const testReport = require(testFnPath + '/testReport.js');
const isEqual = require('./isEqual.js').isEqual;

// general test functions
const pushResult = generalTestFuctions.pushResult;
const getTests = generalTestFuctions.getTests;

const testIsEqual = function (description, expected, lhs, rhs) {
  const actual = isEqual(lhs, rhs);
  const isPassed = expected === actual;

  pushResult(isPassed, 'isEqual', description, expected, actual);
  return isPassed;
};

const isEqualTests = function () {
  const tests = [
    ['Same numbers', true, 1, 1],
    ['Different numbers', false, 1, 2],
    ['Same strings', true, 'a', 'a'],
    ['Different strings', false, 'a', 'ab'],
    ['Empty array', true, [], []],
    ['Same 1 dimensional arrays', true, [1], [1]],
    ['Different 1 dimensional arrays', false, [1], [2]],
    ['1 dimensional arrays with different lengths', false, [1], [1, 2]],
    ['Same 2 dimensional arrays', true, [[1]], [[1]]],
    ['Different 2 dimensional arrays', false, [[1]], [[2]]],
    ['Same arrays having array and number', true, [1, [1]], [1, [1]]],
    ['Same 3 dimensional arrays', true, [[[1]]], [[[1]]]],
    // ['My case', false, [[2], 1], [[3], 1]],
  ];
  for (let index = 0; index < tests.length; index++) {
    testIsEqual(
      tests[index][0],
      tests[index][1],
      tests[index][2],
      tests[index][3]
    );
  }
};

const allTests = function () {
  isEqualTests();
  const report = testReport.generateTestReport(getTests());
  testReport.displayReport(report);
}

allTests();
