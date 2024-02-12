## Form guardian

Collection of common validators for different kind of input fields.


### Use case
Made for the use case of creating POC's quicker, without having to fill your POC with validation logic. Form-guardian simply lets you focus on your POC rather then the common stuff around when it comes to input field validation.

`npm install form-guardian`

```
import { validateZipCodeSwe } from '@form-guardian';
import { maxValue } from '@form-guardian';

validateZipCodeSwe(123321) // false
validateZipCodeSwe(12332) // true

maxValue(1, 5) // true
maxValue(5, 1) // false
```

#### Other information

##### Terms of usage (MIT) - [Lisence](https://github.com/joakimengqvist/swedish-bank-account-validator/blob/master/LICENSE.txt)

Basicly feel free to use, fork etc. But The author takes no responsibility of the code as stated in the license.