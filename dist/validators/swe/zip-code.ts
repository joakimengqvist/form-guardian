import { minMaxLength } from "../basic/min-max-length";
import { numeric } from "../basic/numeric";

/**
 * Validates parameter given zipCode. Returns true if zipCode is valid, otherwise false.
 * @param zipCode - {String}
 * @returns {boolean}
 */
  export const validateZipCodeSwe = (zipCode: string) => {
    if (!numeric(zipCode)) return false;

    return minMaxLength(zipCode, 5, 5)
}
