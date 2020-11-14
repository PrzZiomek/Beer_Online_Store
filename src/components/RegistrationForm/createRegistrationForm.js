import { createForm, createBtn } from "./handlersToCreateForm";
import { pipeline as compose } from "../../pipeline";
import { formHeader } from "./componentsOfRegistrationForm/formHeader";
import { formTextFields } from "./componentsOfRegistrationForm/formTextFields";
import { formAcceptFields } from "./componentsOfRegistrationForm/formAcceptFields";
import { validateAndSendUserData } from "./validation/validateAndSendUserData";
import { validationBeforeSubmit } from "./validationBeforeSubmit/validationBeforeSubmit";



export const createRegistrationForm = () => {

    const area = document.querySelector("main");

    const form = compose(     
            formHeader,
            formTextFields,
            formAcceptFields,
            createBtn("")('dokończ rejestrację'),         
        )(createForm("registration-form"))
     
    area.appendChild(form);

    validationBeforeSubmit(form);
   
    form.onsubmit = validateAndSendUserData();
    }