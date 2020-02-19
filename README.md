# Object validation

This is a simple but effective object validation package that is extensable with customer validations.

## basic useage


```
import { IChecks, Validator, validations } from './index';
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
const v = new Validator(checks);
const errors = v.validate(input); // empty array as no errors
```