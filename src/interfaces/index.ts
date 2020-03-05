export interface ICheck {
    (value: any, args: [any]): boolean;
}
export interface IChecks {
    required: boolean;
    message: string;
    key: string;
    checks: ICheck[]
}

export interface IErrors {
    message: string;
    value: any; // value that failed check
}
