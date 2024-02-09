/**
 * Validates parameter given phoneNumber. Returns true if phoneNumber is a valid Swedish landline number, otherwise false.
 * @param phoneNumber - {String}
 * @returns {boolean}
 */
export const validateLandlinePhoneSwe = (phoneNumber: string): boolean => {
    // Check if phoneNumber starts with the country code for Sweden
    if (phoneNumber.startsWith('+46')) {
        // Check if phoneNumber has the correct length for Swedish landline numbers
        if (phoneNumber.length !== 12) return false;
        // Regular expression to match Swedish landline numbers
        return /^(\+46)8\d{7}$/.test(phoneNumber);
    }
    // Check if phoneNumber starts with the Swedish area code for landline numbers
    if (phoneNumber.startsWith('08')) {
        // Check if phoneNumber has the correct length for Swedish landline numbers
        if (phoneNumber.length !== 10) return false;
        // Regular expression to match Swedish landline numbers
        return /^(08)\d{7}$/.test(phoneNumber);
    }
    return false;
};
