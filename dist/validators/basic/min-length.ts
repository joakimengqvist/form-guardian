/**
 * Returns true if string is longer than or equal to min, otherwise false.
 * @param string - {String}
 * @param min - {Number}
 * @returns {boolean}
 */
export const minLength = (string: string, min : number) : boolean => {
    return string.length >= min;
  }