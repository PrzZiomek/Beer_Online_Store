import { matchInputs } from "./matchInputs";
import { toEither } from "./toEither";


export const registrationFormValidator = () => {
    
    const form = document.querySelector(".registration-form");
    const formInputs = [...form.querySelectorAll("input")];
    const nameInput = form.querySelector("input[type='text']")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const checkFn = matchInputs(nameInput)[nameInput.type];
        toEither(checkFn)
    })
};
