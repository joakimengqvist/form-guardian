import { validateOrgNumberSwe } from '../org-nr';

describe('validateOrgNumberSwe', () => {
  it('should return true for a valid Swedish organization number', () => {
    const validOrgNumber = '5560360793';
    const result = validateOrgNumberSwe(validOrgNumber);
    expect(result).toBe(true);
  });

  it('should return false for an invalid Swedish organization number with incorrect length', () => {
    const invalidOrgNumber = '123456789';
    const result = validateOrgNumberSwe(invalidOrgNumber);
    expect(result).toBe(false);
  });

  it('should return false for an invalid Swedish organization number with non-numeric characters', () => {
    const invalidOrgNumber = 'ABCD123456';
    const result = validateOrgNumberSwe(invalidOrgNumber);
    expect(result).toBe(false);
  });

  it('should return true for a valid Swedish organization number with leading and trailing spaces', () => {
    const validOrgNumber = ' 5560360793 ';
    const result = validateOrgNumberSwe(validOrgNumber);
    expect(result).toBe(true);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    const result = validateOrgNumberSwe(emptyString);
    expect(result).toBe(false);
  });

  it('should return false for a string with only spaces', () => {
    const stringWithSpaces = '        ';
    const result = validateOrgNumberSwe(stringWithSpaces);
    expect(result).toBe(false);
  });
});
