import { matchInputWithFn } from "./matchInputs";
import { toEitherForValidateForm } from "./toEitherToValidateForm";




export const validation = (form) => {

    const formInputs = [...form.querySelectorAll("input")];

    formInputs.map(input => {
        const checkFn = matchInputWithFn(input)[input.type];
        toEitherForValidateForm(checkFn)
    })  
}