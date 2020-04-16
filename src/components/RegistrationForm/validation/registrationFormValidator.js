import { matchInputWithFn } from "./matchInputs";
import { toEither } from "./toEither";


export const registrationFormValidator = () => {

    const form = document.querySelector(".registration-form");
    const formInputs = [...form.querySelectorAll("input")];

    form.addEventListener("submit", (e) => {
        e.preventDefault(); console.log(formInputs);
        
        formInputs.map(input => {
            const checkFn = matchInputWithFn(input)[input.type];
            toEither(checkFn)
        })       
    })
}
    
   

