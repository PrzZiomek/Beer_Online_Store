import { createAlertIfNoValid } from "./validationAlerts/createAlertIfNoValid";
import { inlineValidationElement } from "./validationAlerts/inlineValidationElement";
import { reValidationInputs } from "./reValidationInputs";




export const managingOfValidationAlerts = (form) => (currentInput) => {
    
    const inputs = [...form.querySelectorAll("input")]; 
    const validateMessage = createAlertIfNoValid(inputs)(currentInput.className);
    const inlineValidation = inlineValidationElement(validateMessage)(currentInput);
    const textFields = form.querySelector(".form-textFields"); 
    const inlineWalidationAlreadyIs = textFields.getElementsByClassName(`inlineValidation ${currentInput.className}`).length;                                                                                             

    if(validateMessage){ 
        if(currentInput.type === 'checkbox'){
            inlineValidation.className = "inlineValidationForChecked";
            inlineValidation.style.top = "32%";
        } 
        currentInput.style.backgroundColor = "orangered";
        textFields.appendChild(inlineValidation);
        reValidationInputs(currentInput)(inputs)(inlineValidation);
    }
}