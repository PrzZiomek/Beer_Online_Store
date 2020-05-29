import { pipeline as compose } from '../../../pipeline';
import { createDiv,createText, createLinkTo, createWrapperDiv } from "../../toManipulateDOM/basisHandlersToManipulateDOM";



export const loginWindowQuestions = (element) => {

    const wrapperDiv = compose(    
                          createWrapperDiv("")(
                                createText("")("Nie posiadasz jeszcze konta? "),
                                createLinkTo("")("zarejestruj się")("#/rejestracja"),
                          ),             
                          createLinkTo("")("nie pamiętasz hasła?")("#/przypomnij-haslo"),                  
                    )(createDiv("loginWindow-questions"));

    element.appendChild(wrapperDiv);
  return element
}

