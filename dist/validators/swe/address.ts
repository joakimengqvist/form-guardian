/**
 * Validates if the provided string resembles a Swedish address.
 * Returns true if the address format matches a typical Swedish address format, otherwise false.
 * @param address - {String} The address string to validate.
 * @returns {boolean}
 */
export const validateSwedishAddress = (address: string): boolean => {
    // Regular expression to match a basic Swedish address format
    // This regex pattern is quite simplistic and may not cover all possible address variations
    const swedishAddressRegex = /^(?=.*\d)(?=.*[a-zA-ZåäöÅÄÖ])(?=.*\d)(?=.*[a-zA-Z])[\s\S]{5,}$/;
    // Check if the address matches the Swedish address regex pattern
    return swedishAddressRegex.test(address);
};
