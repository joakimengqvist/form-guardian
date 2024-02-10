import { minLength } from '../min-length';

describe('minLength', () => {
  it('should return true if the string length is equal to min', () => {
    const string = 'abc';
    const min = 3;
    const result = minLength(string, min);
    expect(result).toBe(true);
  });

  it('should return true if the string length is greater than min', () => {
    const string = 'abcdef';
    const min = 3;
    const result = minLength(string, min);
    expect(result).toBe(true);
  });

  it('should return false if the string length is less than min', () => {
    const string = 'ab';
    const min = 3;
    const result = minLength(string, min);
    expect(result).toBe(false);
  });

  it('should return true if min is 0 (empty string)', () => {
    const string = '';
    const min = 0;
    const result = minLength(string, min);
    expect(result).toBe(true);
  });

  it('should return true if min is negative', () => {
    const string = 'abc';
    const min = -1;
    const result = minLength(string, min);
    expect(result).toBe(true);
  });
});
