import { validateLandlineAndMobilePhoneSwe } from '../landline-and-mobile-phone';

describe('validateLandlinePhoneSwe', () => {
  it('should return true for a valid Swedish landline number with country code', () => {
    const validNumberWithCountryCode = '+4681234567';
    const result = validateLandlineAndMobilePhoneSwe(validNumberWithCountryCode);
    expect(result).toBe(true);
  });

  it('should return true for a valid Swedish landline number with area code', () => {
    const validNumberWithAreaCode = '081234567';
    const result = validateLandlineAndMobilePhoneSwe(validNumberWithAreaCode);
    expect(result).toBe(true);
  });

  it('should return false for an invalid Swedish landline number with country code', () => {
    const invalidNumberWithCountryCode = '+46812345';
    const result = validateLandlineAndMobilePhoneSwe(invalidNumberWithCountryCode);
    expect(result).toBe(false);
  });

  it('should return false for an invalid Swedish landline number with area code', () => {
    const invalidNumberWithAreaCode = '0812345';
    const result = validateLandlineAndMobilePhoneSwe(invalidNumberWithAreaCode);
    expect(result).toBe(false);
  });

  it('should return false for a valid international number', () => {
    const internationalNumber = '+1234567890';
    const result = validateLandlineAndMobilePhoneSwe(internationalNumber);
    expect(result).toBe(false);
  });

  it('should return false for a valid mobile number', () => {
    const mobileNumber = '+46701234567';
    const result = validateLandlineAndMobilePhoneSwe(mobileNumber);
    expect(result).toBe(true);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    const result = validateLandlineAndMobilePhoneSwe(emptyString);
    expect(result).toBe(false);
  });
});
