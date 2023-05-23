const mostCommon = require('./mostCommon');

describe('mostCommon', () => {
  it('returns the most common lowercase characters', () => {
    expect(mostCommon('earlier')).toEqual(['e', 'r']);
  });

  it('returns the most common lowercase characters when input has uppercase letters', () => {
    expect(mostCommon('Earlier')).toEqual(['e', 'r']);
  });

  it('returns an empty array for an empty string', () => {
    expect(mostCommon('')).toEqual([]);
  });

  it('returns an array with a single character for a string with only one character', () => {
    expect(mostCommon('a')).toEqual(['a']);
  });

  it('returns an array with all characters when all characters have the same count', () => {
    expect(mostCommon('abcABC')).toEqual(['a', 'b', 'c']);
  });

  it('returns an array with a single character when all characters are unique', () => {
    expect(mostCommon('abcdefg')).toEqual(['a','b','c','d','e','f','g']);
  });
});
