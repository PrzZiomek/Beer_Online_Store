import { validation } from './validation';


export const registrationFormValidator = () => {

    const form = document.querySelector(".registration-form");

    form.addEventListener("submit", (e) => {

        e.preventDefault();     
        validation(e.target) 
    })
}
    
   

