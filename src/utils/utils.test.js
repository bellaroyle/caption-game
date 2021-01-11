const { randomCodeGen, randomNumberGen, hasDuplicates } = require('./utils');

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

describe('hasDuplicates', () => {
  test('returns true if array has duplicates', () => {
    expect(hasDuplicates([1, 1, 2, 3, 4])).toBe(true);
  });
  test('returns false if array hasnt got duplicates', () => {
    expect(hasDuplicates([1, 6, 2, 3, 4])).toBe(false);
  });
});

describe('randomNumberGen', () => {
  test('returns array of length 5 when passed 5', () => {
    let result = randomNumberGen(5);
    expect(result.length).toBe(5);
  });
  test('returns array with non repeating numbers', () => {
    let result = randomNumberGen(5);
    expect(hasDuplicates(result)).toBe(false);
  });
});
describe('shuffle', () => {
  test('returns an array with same length as input array', () => {
    let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(shuffle(input).length).toBe(9);
  });
  test('returns an array that is different to input array', () => {
    let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(shuffle(input)).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
