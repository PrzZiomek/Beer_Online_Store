import { createForm, createBtn } from "./handlersToCreateForm";
import { pipeline as compose } from "../../pipeline";
import { formHeader } from "./componentsOfRegistrationForm/formHeader";
import { formTextFields } from "./componentsOfRegistrationForm/formTextFields";
import { formAcceptFields } from "./componentsOfRegistrationForm/formAcceptFields";
import { registrationFormValidator } from "./validation/registrationFormValidator";



export const createRegistrationForm = () => {

    const area = document.querySelector("main");

    const wrapper = compose(     
            formHeader,
            formTextFields,
            formAcceptFields,
            createBtn("")('dokończ rejestrację')             
        )(createForm("registration-form"))
            
    area.appendChild(wrapper);
    
    wrapper.onsubmit = registrationFormValidator();
}