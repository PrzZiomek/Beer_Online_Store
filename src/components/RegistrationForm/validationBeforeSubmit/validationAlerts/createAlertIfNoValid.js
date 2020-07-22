import { objWithInputsByClassName } from '../helpers/objWithInputsByClassName';
import { matchValidationMessage } from '../matchValidationMessage';




export const createAlertIfNoValid = (inputs) => (targetInputClassName) => {

    const inputsByClassName = objWithInputsByClassName(inputs);
    const matchedMessage = matchValidationMessage(inputsByClassName)[targetInputClassName];      
    const alertMessage = matchedMessage ? matchedMessage : "";
    
    return alertMessage;
}
