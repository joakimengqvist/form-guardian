/**
 * Returns true if string contains only alphabetic characters, otherwise false.
 * @param string - {String}
 * @returns {boolean}
 */
export const alphabetic = (string: string) : boolean => {
    return /^[a-zA-Z\s]+$/.test(string);
  }