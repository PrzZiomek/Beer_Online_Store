import { pipeline as compose } from '../../../../pipeline';
import { createDiv, createText, createTitle } from "../../../toManipulateDOM/basisHandlersToManipulateDOM";



export const inlineValidationElement = (text) => (currentInput) => {

    const wrapperDiv = compose(    
        createText("")(text),
    )(createDiv("inlineValidation"));
    
    wrapperDiv.style.top = currentInput.offsetTop + "px";
    wrapperDiv.classList.add(currentInput.className)

 return wrapperDiv;

}