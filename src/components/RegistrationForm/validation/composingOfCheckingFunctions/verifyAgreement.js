import { checkIfIsAgreement } from "../checkingFunctions";


export const verifyAgreement = (value) => () => checkIfIsAgreement(value);
