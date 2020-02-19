import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

interface ICheck {
    (value: any, args: [any]): boolean;
}
export interface IChecks {
    required: boolean;
    message: string;
    key: string;
    checks: ICheck[]
}

interface IErrors {
    message: string;
    value: any; // value that failed check
}

const get = (path: string, object: any) => R.view(R.lensPath(R.split('.', path)), object);
export const validations = RA;
export class Validator {
    private validations: IChecks[]
    public _errors: IErrors[] = [];
    public valid: boolean = false;
    private input: any;

    constructor(validations: IChecks[], input: any) {
        this.validations = validations;
        this.input = input;
    }

    public validate(): void {
        if (!RA.isObjLike(this.input) || Array.isArray(this.input)) {
            this._errors.push({ message: 'input must be an object', value: this.input });
        } else {
            this.validations.forEach((validation) => {
                const required: boolean = validation.required;
                const message: string = validation.message;
                const key:string = validation.key;
                const value = get(key, this.input);

                if (required && RA.isUndefined(value)) {
                    this._errors.push({ message: `${key} is required`, value });
                } else {
                    const check = R.allPass(validation.checks);
                    const result: boolean = check(value);
                    if (RA.isFalse(result) && required) {
                        this._errors.push({ message, value });
                    }
                }
            });
        }
        this.valid = this._errors.length === 0;
    }

    public errors(): IErrors[] {
        return this._errors;
    }
}
