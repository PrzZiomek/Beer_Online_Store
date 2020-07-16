import { objWithInputsByClassName } from './helpers/objWithInputsByClassName';
import { matchValidationMessage } from './matchValidationMessage';


export const validationBeforeSubmit = (form) => {

        form.addEventListener("focusout", (e) =>{

         /*
            const emailInput = form.querySelector("input.email");
            const passwordInput = form.querySelector("input.password");
            const passwordRepaetedInput = form.querySelector("input.passwordRepeated");
            const nameInput = form.querySelector("input.name");
            const surnameInput = form.querySelector("input.surname");
            const checkInput = form.querySelector("input.acceptRegulations");
*/
         const inputs = [...form.querySelectorAll("input")]; 
      
         console.log(e.target);

   
           alert(matchValidationMessage(objWithInputsByClassName(inputs))[e.target.className]) ;
      
        })
}
























