import { minValue } from '../min-value';

describe('minValue', () => {
  it('should return true if the number is higher than or equal to min', () => {
    const number = 10;
    const min = 5;
    const result = minValue(number, min);
    expect(result).toBe(true);
  });

  it('should return false if the number is lower than min', () => {
    const number = 3;
    const min = 5;
    const result = minValue(number, min);
    expect(result).toBe(false);
  });

  it('should return true if the number is equal to min', () => {
    const number = 5;
    const min = 5;
    const result = minValue(number, min);
    expect(result).toBe(true);
  });

  it('should return true for negative numbers if min is negative', () => {
    const number = -10;
    const min = -15;
    const result = minValue(number, min);
    expect(result).toBe(true);
  });

  it('should return false for negative numbers if min is positive', () => {
    const number = -10;
    const min = 5;
    const result = minValue(number, min);
    expect(result).toBe(false);
  });

  it('should return true if both number and min are 0', () => {
    const number = 0;
    const min = 0;
    const result = minValue(number, min);
    expect(result).toBe(true);
  });

  it('should return true if number is positive and min is 0', () => {
    const number = 10;
    const min = 0;
    const result = minValue(number, min);
    expect(result).toBe(true);
  });

  it('should return false if number is negative and min is 0', () => {
    const number = -10;
    const min = 0;
    const result = minValue(number, min);
    expect(result).toBe(false);
  });
});