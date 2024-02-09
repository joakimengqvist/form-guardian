import { maxLength } from '../max-length';

describe('maxLength', () => {
  it('should return true if the string length is equal to maxLength', () => {
    const string = 'abc';
    const max = 3;
    const result = maxLength(string, max);
    expect(result).toBe(true);
  });

  it('should return true if the string length is less than maxLength', () => {
    const string = 'abc';
    const max = 5;
    const result = maxLength(string, max);
    expect(result).toBe(true);
  });

  it('should return false if the string length is greater than maxLength', () => {
    const string = 'abcdef';
    const max = 3;
    const result = maxLength(string, max);
    expect(result).toBe(false);
  });

  it('should return true if maxLength is 0 (empty string)', () => {
    const string = '';
    const max = 0;
    const result = maxLength(string, max);
    expect(result).toBe(true);
  });

  it('should return true if maxLength is negative', () => {
    const string = 'abc';
    const max = -1;
    const result = maxLength(string, max);
    expect(result).toBe(true);
  });
});
