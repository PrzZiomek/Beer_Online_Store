import { matchInputWithFn } from "./matchInputs";
import { toEither } from "./toEither";




export const validation = (form) => {

    const formInputs = [...form.querySelectorAll("input")];

    formInputs.map(input => {
        const checkFn = matchInputWithFn(input)[input.type];
        toEither(checkFn)
    })  
}