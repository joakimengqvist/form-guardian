/**
 * Returns true if string is contains only normal characters, otherwise false.
 * @param string - {String}
 * @returns {boolean}
 */
export const noSpecialCharacters = (string: string): boolean => {
    return /^[a-zA-Z0-9\s]+$/.test(string);
  }