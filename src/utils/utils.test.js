const { randomCodeGen } = require('./utils');

describe('randomCodeGen', () => {
  test('returns a 6 character string', () => {
    let result = randomCodeGen();
    expect(result.length).toBe(6);
  });
  test('returns a string', () => {
    expect(typeof randomCodeGen()).toBe('string');
  });
  test('returns different codes when called upon multiple times', () => {
    const result1 = randomCodeGen();
    const result2 = randomCodeGen();
    expect(result1).not.toBe(result2);
  });
});
