/**
 * Validates parameter given phoneNumber. Returns true if phoneNumber is a valid Swedish landline number, otherwise false.
 * @param phoneNumber - {String}
 * @returns {boolean}
 */
export const validateLandlineAndMobilePhoneSwe = (phoneNumber: string): boolean => {
    if (phoneNumber.charAt(0) === '+') {
        if (phoneNumber.charAt(3) === '8') {
            return /^([+]46)8(\d{7})$/.test(phoneNumber);
        }
        
        if (phoneNumber.length !== 12) return false;
        return /^([+]46)7[02369](\d{7})$/.test(phoneNumber);
    }
    if (phoneNumber.substring(0, 2) === '07') {
        if (phoneNumber.length !==  10) return false;
        return /^(07[02369])(\d{7})$/.test(phoneNumber)
    }
    if (phoneNumber.substring(0, 4) === '0046') {
        if (phoneNumber.length !== 13) return false;
        return /^(0046)7[02369](\d{7})$/.test(phoneNumber);
    }
    if (phoneNumber.startsWith('08')) {
        return /^(08)\d{7}$/.test(phoneNumber);
    }
    if (phoneNumber.startsWith('50')) {
        if (phoneNumber.length !== 10) return false;
        return /^(50)\d{7}$/.test(phoneNumber);
    }
    return false;
};