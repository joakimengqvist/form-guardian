import { validateSwedishAddress } from '../address';

describe('validateSwedishAddress', () => {
  it('should return true for a valid Swedish address format', () => {
    const validAddress = 'Storgatan 1';
    const result = validateSwedishAddress(validAddress);
    expect(result).toBe(true);
  });

  it('should return false for an empty address', () => {
    const emptyAddress = '';
    const result = validateSwedishAddress(emptyAddress);
    expect(result).toBe(false);
  });

  it('should return false for an address without a number', () => {
    const addressWithoutNumber = 'Storgatan';
    const result = validateSwedishAddress(addressWithoutNumber);
    expect(result).toBe(false);
  });

  it('should return false for an address without a street name', () => {
    const addressWithoutStreet = '1';
    const result = validateSwedishAddress(addressWithoutStreet);
    expect(result).toBe(false);
  });

  it('should return false for an address with only digits', () => {
    const addressOnlyDigits = '12345';
    const result = validateSwedishAddress(addressOnlyDigits);
    expect(result).toBe(false);
  });

  it('should return false for an address with only letters', () => {
    const addressOnlyLetters = 'Storgatan';
    const result = validateSwedishAddress(addressOnlyLetters);
    expect(result).toBe(false);
  });

  it('should return true for an address with special characters', () => {
    const addressWithSpecialCharacters = 'Storgatan 1 Ä';
    const result = validateSwedishAddress(addressWithSpecialCharacters);
    expect(result).toBe(true);
  });

  it('should return true for an address with multiple words', () => {
    const addressWithMultipleWords = 'Storgatan 1, 123 45 Stockholm';
    const result = validateSwedishAddress(addressWithMultipleWords);
    expect(result).toBe(true);
  });
});
