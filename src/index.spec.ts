import { IChecks, Validator, validations } from './index';

test('Should pass with simple input', (done) => {
    const input = {
        name: 'vorticalbox',
    };
    const checks: IChecks[] = [
        {
            required: true,
            message: 'name must be a string',
            key: 'name',
            checks: [validations.isString],
        },
    ];
    const v = new Validator(checks, input);
    v.validate();
    expect(v.valid).toEqual(true);
    done();
});

test('Should fail invalid type', (done) => {
    const input = {
        name: 1234,
    };
    const checks: IChecks[] = [
        {
            required: true,
            message: 'name must be a string',
            key: 'name',
            checks: [validations.isString],
        },
    ];
    const v = new Validator(checks, input);
    v.validate();
    expect(v.valid).toEqual(false);
    const [error] = v.errors();
    expect(error.message).toEqual('name must be a string');
    done();
});

test('Should fail with no value', (done) => {
    const input = {};
    const checks: IChecks[] = [
        {
            required: true,
            message: 'name must be a string',
            key: 'name',
            checks: [validations.isString],
        },
    ];
    const v = new Validator(checks, input);
    v.validate();
    expect(v.valid).toEqual(false);
    const [error] = v.errors();
    expect(error.message).toEqual('name is required');
    done();
});

test('Should fail invalid input type', (done) => {
    const input: any = [];
    const checks: IChecks[] = [
        {
            required: true,
            message: 'name must be a string',
            key: 'name',
            checks: [validations.isString],
        },
    ];
    const v = new Validator(checks, input);
    v.validate();
    expect(v.valid).toEqual(false);
    const [error] = v.errors();
    expect(error.message).toEqual('input must be an object');
    done();
});

test('Should pass with missing key', (done) => {
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
            message: 'email must be a string',
            key: 'email',
            checks: [validations.isString],
        },
    ];
    const v = new Validator(checks, input);
    v.validate();
    expect(v.valid).toEqual(true);
    done();
});

test('Custom validation function', (done) => {
    const input: any = {
        status: 'broken',
    };
    const contains = (value:any): boolean => ['valid', 'invalid'].includes(value);
    const checks: IChecks[] = [
        {
            required: true,
            message: 'must be valid or invalid',
            key: 'status',
            checks: [contains],
        },

    ];
    const v = new Validator(checks, input);
    v.validate();
    expect(v.valid).toEqual(false);
    const [error] = v.errors();
    expect(error.message).toEqual('must be valid or invalid');
    expect(error.value).toEqual(input.status);
    done();
});

test('Should pass with simple input - thread', (done) => {
    const input = {
        name: 'vorticalbox',
    };
    const checks: IChecks[] = [
        {
            required: true,
            message: 'name must be a string',
            key: 'name',
            checks: [validations.isString],
        },
    ];
    const v = new Validator(checks, input);
    v.validate();
    expect(v.valid).toEqual(true);
    done();
});
