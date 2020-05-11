# ramda-adjunct-validation

This is a simple but effective object validation package that is extensable with custom validations.

a validation is simply a function that takes one arguement, the value being tested and returns boolean of if it passes.

I have included and exported https://char0n.github.io/ramda-adjunct/2.26.0/ which has lots of compatable validations,
such as isString, isNonEmptyString and many more but you can simply pass your own functions in the checks array, so long as the match the requirement above.

## basic use Typescript


``` typescript
import { IChecks, Validator, validations } from 'ramda-adjunct-validation';
const input = {
    username: 'vorticalbox',
};
const checks: IChecks[] = [
    {
        required: true,
        message: 'username must be a string',
        key: 'username',
        checks: [validations.isString],
    },
    {
        required: false,
        message: 'firstName must be a string',
        key: 'firstName',
        checks: [validations.isString],
    },
    {
        required: false,
        message: 'firstName must be a string',
        key: 'firstName',
        checks: [validations.isString],
    },
];
const v = new Validator(checks, input);
v.validate();
v.valid() // returns true or false
const errors = v.errors() // returns array of errors else []
```


### TODO:

- create promise based validation