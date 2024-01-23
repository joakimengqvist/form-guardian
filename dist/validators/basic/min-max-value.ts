/**
 * Returns true if the [number is higher than or equal to min] and [lower than or equal to max], otherwise false.
 * @param number - {Number}
 * @param min - {Number}
 * @param max - {Number}
 * @returns {boolean}
 */
export const minMaxValue = (number: number, min : number, max : number) : boolean => {
    return number >= min && number <= max;
  }