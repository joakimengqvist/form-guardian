/**
 * Validates parameter given phoneNumber. Returns true if phoneNumber is valid, otherwise false.
 * @param phoneNumber - {String}
 * @returns {boolean}
 */
  export const validateMobilePhoneSwe = (phoneNumber : string) : boolean => {
    if (phoneNumber.charAt(0) === '+') {
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

    return false;
}
