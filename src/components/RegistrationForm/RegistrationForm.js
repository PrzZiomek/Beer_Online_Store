import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { infoAboutPassword }  from "./infoAboutPassword.js"
import { createRegistrationForm } from "./createRegistrationForm";



export const RegistrationForm = () => {

    const area = document.querySelector("main");

    clearContentOf(area);
      
    createRegistrationForm();

    infoAboutPassword()
}