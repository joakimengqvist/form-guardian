/**
 * Validates parameter given orgNumber. Returns true if orgNumber is valid, otherwise false.
 * @param orgNumber - {String}
 * @returns {boolean}
 */
export const validateOrgNumberSwe = (orgNumber: string) => {
    if (orgNumber.trim().length !== 10) return false;
    
    return /^[0-9]{2}[2-9][0-9]{7}$/.test(orgNumber.trim());
}
