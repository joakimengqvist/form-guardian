import { numeric } from '../numeric';

describe('numeric', () => {
  it('should return true for a string containing only numeric characters', () => {
    const validString = '1234567890';
    const result = numeric(validString);
    expect(result).toBe(true);
  });

  it('should return false for a string containing non-numeric characters', () => {
    const invalidString = '123abc456';
    const result = numeric(invalidString);
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const emptyString = '';
    const result = numeric(emptyString);
    expect(result).toBe(true);
  });

  it('should return false for a string containing spaces', () => {
    const stringWithSpaces = '123 456';
    const result = numeric(stringWithSpaces);
    expect(result).toBe(false);
  });

  it('should return true for a string containing only one numeric character', () => {
    const singleNumericCharacter = '7';
    const result = numeric(singleNumericCharacter);
    expect(result).toBe(true);
  });

  it('should return false for a string containing only non-numeric characters', () => {
    const nonNumericCharacters = 'abcdefg';
    const result = numeric(nonNumericCharacters);
    expect(result).toBe(false);
  });
});