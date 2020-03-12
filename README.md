# Object validation

This is a simple but effective object validation package that is extensable with customer validations.

## basic use Typescript


```
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
