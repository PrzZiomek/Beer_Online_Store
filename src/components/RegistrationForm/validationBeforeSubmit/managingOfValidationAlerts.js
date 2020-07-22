import { createAlertIfNoValid } from "./validationAlerts/createAlertIfNoValid";
import { inlineValidationElement } from "./validationAlerts/inlineValidationElement";




export const managingOfValidationAlerts = (form) => (currentInput) => {
    
    const inputs = [...form.querySelectorAll("input")]; 
    const validateMessage = createAlertIfNoValid(inputs)(currentInput.className);
    const inlineValidation = inlineValidationElement(validateMessage)(currentInput);
    const textFields = form.querySelector(".form-textFields");
    const curentAlert = form.getElementsByClassName(`inlineValidation ${currentInput.className}`);
            console.log(curentAlert);
                                                                                                                           

    if(validateMessage){
        currentInput.style.backgroundColor = "orangered";
        textFields.appendChild(inlineValidation);
    }
 /*  if(curentAlert){
        currentInput.style.backgroundColor = "revert";
        textFields.removeChild(inlineValidation);
        console.log("haaah!");      
    } */
}