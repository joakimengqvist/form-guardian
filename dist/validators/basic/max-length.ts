/**
 * Returns true if string is shorter than or equal to maxLength, otherwise false.
 * @param string - {String}
 * @param max - {Number}
 * @returns {boolean}
 */
export const maxLength = (string: string, max : number) : boolean => {
    return string.length <= max;
  }