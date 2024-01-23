/**
 * Returns true if the [number is higher than or equal to min] and [lower than or equal to max], otherwise false.
 * @param string - {String}
 * @param min - {Number}
 * @param max - {Number}
 * @returns {boolean}
 */
export const minMaxLength = (string: string, min : number, max : number) : boolean => {
    return string.length >= min && string.length <= max;
  }