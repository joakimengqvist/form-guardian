

// Swedish validators
const validatePropertySwe = require('./validators/swe/property.ts');
const validateOrgNumberSwe = require('./validators/swe/org-nr.ts');
const validateSSNswe = require('./validators/swe/ssn.ts');
const validateMobilePhoneSwe = require('./validators/swe/mobile-phone.ts');
const validateZipCodeSwe = require('./validators/swe/zip-code.ts');

// Basic validators
const alphabetic = require('./validators/basic/alphabetic.ts');
const maxLength = require('./validators/basic/max-length.ts');
const maxValue = require('./validators/basic/max-value.ts');
const minLength = require('./validators/basic/min-length.ts');
const minMaxLength = require('./validators/basic/min-max-length.ts');
const minMaxValue = require('./validators/basic/min-max-value.ts');
const minValue = require('./validators/basic/min-value.ts');
const noSpecialCharacters = require('./validators/basic/no-special-characters.ts');
const numeric = require('./validators/basic/numeric.ts');

module.exports = {
    validatePropertySwe,
    validateOrgNumberSwe,
    validateSSNswe,
    validateMobilePhoneSwe,
    validateZipCodeSwe,
    alphabetic,
    maxLength,
    maxValue,
    minLength,
    minMaxLength,
    minMaxValue,
    minValue,
    noSpecialCharacters,
    numeric
};

