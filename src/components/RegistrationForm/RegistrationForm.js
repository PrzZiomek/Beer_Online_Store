import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { infoAboutPassword }  from "./infoAboutPassword.js"
import { createRegistrationForm } from "./createRegistrationForm";
import { removeLoginWindowModal } from "../toManipulateDOM/removeModal/removeLoginWindowModal";



export const RegistrationForm = () => {

    const area = document.querySelector("main");

    clearContentOf(area);  
    removeLoginWindowModal();
    createRegistrationForm();
    infoAboutPassword()
}