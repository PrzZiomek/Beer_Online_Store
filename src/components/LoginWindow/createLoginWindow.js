import { createDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { pipeline as compose } from "../../pipeline";
import { createLoginForm } from './componentsOfCreateLoginWindow/createLoginForm';
import { buttonToCloseLoginWindow } from './createBtnToCloseLoginWindow';
import { loginWindowHeader } from './componentsOfCreateLoginWindow/loginWindowHeader';
import { loginWindowQuestions } from './componentsOfCreateLoginWindow/loginWindowQuestions';




export const createLoginWindow = () => 
                  compose(    
                        buttonToCloseLoginWindow,    
                        loginWindowHeader,
                        createLoginForm,
                        loginWindowQuestions,
                    )(createDiv("loginWindow"));

                   
                
 