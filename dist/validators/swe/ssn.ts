/**
 * Validates parameter given SSN. Returns true if SSN is valid, otherwise false.
 * @param ssn - {String}
 * @returns {boolean}
 */
 export const validateSSNswe = (ssn : string) => {
    if (ssn === undefined || ssn === null) {
      return false;
    }

    let a = parse(ssn);
    if (a.length === 10) {
      const c = a.pop();
      switch(getChecksum(a)) {
        case c: return true;
        default: return false;
      }
    } else {
      return false;
    }
  }

const flatMap = (arr, f) => [].concat.apply([], arr.map(f))

const getChecksum = (ssn) => {
  const l = [2, 1, 2, 1, 2, 1, 2, 1, 2]
  const m = ssn.map((e, i) => { return e * l[i] });
  const digits = flatMap(m, (n) => (n >= 10) ? [sumOfNum(n)] : [n]);

  const reducer = (a, c) => a + c;
  const sum = digits.reduce(reducer);
  const check = Math.floor((sum * 9) % 10);
  return check;
}

const sumOfNum = (num) => {
  return (Math.floor(num % 10) + Math.floor(num / 10));
}

const parse = (ssn) => {
  const cleaned = ssn.replace(/\D/g, "").split("")
  if(cleaned.length === 12) {
    return cleaned.slice(2,12).map(Number);
  }
  return cleaned.map(Number);
}