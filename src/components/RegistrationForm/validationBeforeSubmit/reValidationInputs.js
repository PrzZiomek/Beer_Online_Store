import { createAlertIfNoValid } from "./validationAlerts/createAlertIfNoValid";



export const reValidationInputs = (currentInput) => (inputs) => (inlineValidation) =>
    currentInput.addEventListener("input", () => {
       const validateMessage = createAlertIfNoValid(inputs)(currentInput.className);
        if(!validateMessage){
            inlineValidation.parentNode.removeChild(inlineValidation);
            currentInput.style.backgroundColor = "green";
        }
    })

