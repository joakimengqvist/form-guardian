import { noSpecialCharacters } from '../no-special-characters';

describe('noSpecialCharacters', () => {
  it('should return true for a string containing only normal characters', () => {
    const normalString = 'abcABC123';
    const result = noSpecialCharacters(normalString);
    expect(result).toBe(true);
  });

  it('should return true for a string containing normal characters and spaces', () => {
    const stringWithSpaces = 'abc ABC 123';
    const result = noSpecialCharacters(stringWithSpaces);
    expect(result).toBe(true);
  });

  it('should return false for a string containing special characters', () => {
    const stringWithSpecialCharacters = 'abc!@#';
    const result = noSpecialCharacters(stringWithSpecialCharacters);
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const emptyString = '';
    const result = noSpecialCharacters(emptyString);
    expect(result).toBe(true);
  });

  it('should return true for a string containing only one normal character', () => {
    const singleNormalCharacter = 'a';
    const result = noSpecialCharacters(singleNormalCharacter);
    expect(result).toBe(true);
  });

  it('should return true for a string containing only one normal character and spaces', () => {
    const singleNormalCharacterWithSpaces = 'a b c';
    const result = noSpecialCharacters(singleNormalCharacterWithSpaces);
    expect(result).toBe(true);
  });

  it('should return false for a string containing only special characters', () => {
    const onlySpecialCharacters = '!@#';
    const result = noSpecialCharacters(onlySpecialCharacters);
    expect(result).toBe(false);
  });
});