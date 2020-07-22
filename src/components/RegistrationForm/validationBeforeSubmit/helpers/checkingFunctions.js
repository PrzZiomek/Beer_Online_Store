import { includeNumber } from '../../validation/checkingFunctions';


export const ifIncorrectNameFormat = (name) => includeNumber(name) || name.length < 2;

export const ifIncorrectEmailFormat = (email) => !(/(^\w.*@\w+\.\w)/.test(email));

export const ifNoAgreement = (checked) => !checked; 

export const ifIncorrectPasswordLength = (password) => password.length < 5;

export const ifNoIdenticalPassword = (password) => (prevPassword) => password !== prevPassword;