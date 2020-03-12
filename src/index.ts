import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

import { ICheck, IChecks, IErrors } from './interfaces';

const get = (path: string, object: any) => R.view(R.lensPath(R.split('.', path)), object);
export const validations = RA;
export class Validator {
    private validations: IChecks[];

    private foundErrors: IErrors[] = [];

    public valid: boolean = false;

    private input: any;

    constructor(passedValidations: IChecks[], input: any) {
      this.validations = passedValidations;
      this.input = input;
    }

    public validate(): void {
      if (!RA.isObjLike(this.input) || Array.isArray(this.input)) {
        this.foundErrors.push({ message: 'input must be an object', value: this.input });
      } else {
        this.validations.forEach((validation) => {
          const { required, message, key } = validation;
          const value = get(key, this.input);

          if (required && RA.isUndefined(value)) {
            this.foundErrors.push({ message: `${key} is required`, value });
          } else {
            const check = R.allPass(validation.checks);
            const result: boolean = check(value);
            if (RA.isFalse(result) && RA.isNotUndefined(value)) {
              this.foundErrors.push({ message, value });
            }
          }
        });
      }
      this.valid = this.foundErrors.length === 0;
    }

    public errors(): IErrors[] {
      return this.foundErrors;
    }
}
