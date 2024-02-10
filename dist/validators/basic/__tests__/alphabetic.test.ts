import { alphabetic } from '../alphabetic';

describe('alphabetic', () => {
  it('should return true if the string contains only alphabetic characters', () => {
    const string = 'abcdefg';
    const result = alphabetic(string);
    expect(result).toBe(true);
  });

  it('should return true if the string contains alphabetic characters and spaces', () => {
    const string = 'abc def g';
    const result = alphabetic(string);
    expect(result).toBe(true);
  });

  it('should return false if the string contains non-alphabetic characters', () => {
    const string = 'abc123';
    const result = alphabetic(string);
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const string = '';
    const result = alphabetic(string);
    expect(result).toBe(true);
  });

  it('should return true if the string contains only one alphabetic character', () => {
    const string = 'a';
    const result = alphabetic(string);
    expect(result).toBe(true);
  });

  it('should return false if the string contains only non-alphabetic characters', () => {
    const string = '123456';
    const result = alphabetic(string);
    expect(result).toBe(false);
  });
});
