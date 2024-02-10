import { maxValue } from '../max-value';

describe('maxValue', () => {
  it('should return true if the number is equal to max', () => {
    const number = 10;
    const max = 10;
    const result = maxValue(number, max);
    expect(result).toBe(true);
  });

  it('should return true if the number is less than max', () => {
    const number = 8;
    const max = 10;
    const result = maxValue(number, max);
    expect(result).toBe(true);
  });

  it('should return false if the number is greater than max', () => {
    const number = 15;
    const max = 10;
    const result = maxValue(number, max);
    expect(result).toBe(false);
  });

  it('should return true if max is 0 and number is negative', () => {
    const number = -5;
    const max = 0;
    const result = maxValue(number, max);
    expect(result).toBe(true);
  });

  it('should return true if max is negative and number is positive', () => {
    const number = 10;
    const max = -5;
    const result = maxValue(number, max);
    expect(result).toBe(true);
  });
});
