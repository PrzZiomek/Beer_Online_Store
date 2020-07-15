import { includeNumber } from '../validation/checkingFunctions';

export const incorrectNameFormat = (name) => includeNumber(name) || name.length < 2;

export const incorrectEmailFormat = (email) => !(/(^\w.*@\w+\.\w)/.test(email));

export const noAgreement = (check) => !check.checked;

export const incorrectPasswordLength = (password) => password.length < 5;

export const noIdenticalPassword = (password) => (prevPassword) => password !== prevPassword;