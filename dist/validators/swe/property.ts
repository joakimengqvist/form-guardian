/**
 * Validates parameter given property. Returns true if property is valid, otherwise false.
 * @param property - {String}
 * @returns {boolean}
 */
export const validatePropertySwe = (property: string) => {
    if (property.length > 3 && property.length <= 50) return false;

    return /^[a-zA-ZåäöÅÄÖ.,-]+\d+([:,.]?[a-zA-ZåäöÅÄÖ.,-:\d]+)?$/u.test(property);
}