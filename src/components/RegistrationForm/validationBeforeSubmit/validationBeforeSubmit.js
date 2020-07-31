import { managingOfValidationAlerts } from "./managingOfValidationAlerts";


export const validationBeforeSubmit = (form) => {

        form.addEventListener("focusout", (e) =>{   
          const currentInput = e.target;
          managingOfValidationAlerts(form)(currentInput)
      })
}



  /*
            const emailInput = form.querySelector("input.email");
            const passwordInput = form.querySelector("input.password");
            const passwordRepaetedInput = form.querySelector("input.passwordRepeated");
            const nameInput = form.querySelector("input.name");
            const surnameInput = form.querySelector("input.surname");
            const checkInput = form.querySelector("input.acceptRegulations");
*/




















