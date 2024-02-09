/**
 * Validates parameter given email. Returns true if email is valid, otherwise false.
 * @param email - {String}
 * @returns {boolean}
 */
export const validateEmail = (email: string): boolean => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regular expression
    return emailRegex.test(email);
}
