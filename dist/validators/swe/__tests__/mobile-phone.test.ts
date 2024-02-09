import { validateMobilePhoneSwe } from '../mobile-phone';

describe('validateMobilePhoneSwe', () => {
  it('should return true for a valid Swedish mobile number with country code', () => {
    const validNumberWithCountryCode = '+46701234567';
    const result = validateMobilePhoneSwe(validNumberWithCountryCode);
    expect(result).toBe(true);
  });

  it('should return true for a valid Swedish mobile number with leading "07"', () => {
    const validNumberWithLeading07 = '0730123456';
    const result = validateMobilePhoneSwe(validNumberWithLeading07);
    expect(result).toBe(true);
  });

  it('should return true for a valid Swedish mobile number with leading "0046"', () => {
    const validNumberWithLeading0046 = '0046730123456';
    const result = validateMobilePhoneSwe(validNumberWithLeading0046);
    expect(result).toBe(true);
  });

  it('should return false for an invalid Swedish mobile number with country code', () => {
    const invalidNumberWithCountryCode = '+4681234567';
    const result = validateMobilePhoneSwe(invalidNumberWithCountryCode);
    expect(result).toBe(false);
  });

  it('should return false for an invalid Swedish mobile number with leading "07"', () => {
    const invalidNumberWithLeading07 = '071234567';
    const result = validateMobilePhoneSwe(invalidNumberWithLeading07);
    expect(result).toBe(false);
  });

  it('should return false for an invalid Swedish mobile number with leading "0046"', () => {
    const invalidNumberWithLeading0046 = '00461234567';
    const result = validateMobilePhoneSwe(invalidNumberWithLeading0046);
    expect(result).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    const result = validateMobilePhoneSwe(emptyString);
    expect(result).toBe(false);
  });
});
