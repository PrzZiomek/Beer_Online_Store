import { createWrapperDiv, createDiv, createLinkTo, createText, createTitle } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { pipeline as compose } from "../../pipeline";
import { createLoginForm } from './createLoginForm';
import { createButtonToCloseLoginWindow } from './createBtnToCloseLoginWindow';



export const createLoginWindow = () => 
                compose(    
                    createButtonToCloseLoginWindow("loginWindow-close")("X"),       
                    createWrapperDiv("loginWindow-header")(
                        createTitle("")("beers"),
                        createText("")("zaloguj się"),
                    ),
                    createLoginForm,
                    createWrapperDiv("loginWindow-questions")(
                    createText("")("Nie posiadasz jeszcze konta?"),
                    createLinkTo("")("zarejestruj się")("#/rejestracja"),
                    createLinkTo("")("nie pamiętasz hasła?")("#/przypomnij-haslo"), 
                    ),
                )(createDiv("loginWindow"));
            
 