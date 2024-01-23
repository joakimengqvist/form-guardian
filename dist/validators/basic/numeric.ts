/**
 * Returns true if the string contains only numeric characters, otherwise false.
 * @param string - {string}
 * @returns {boolean}
 */
export const numeric = (string: string): boolean => {
    return /^[0-9]+$/.test(string);
  };
  