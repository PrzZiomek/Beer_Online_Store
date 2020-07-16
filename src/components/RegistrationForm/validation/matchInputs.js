import { verifyName } from "./composingOfCheckingFunctions/verifyName";
import { verifyEmail } from "./composingOfCheckingFunctions/verifyEmail";
import { verifyAgreement } from "./composingOfCheckingFunctions/verifyAgreement";
import { verifyPassword } from "./composingOfCheckingFunctions/verifyPassword";



export const matchInputWithFn = (input) => ({

                "text" : verifyName(input.value),
                "email" : verifyEmail(input.value),
                "radio" : verifyAgreement(input.checked),
                "password" : verifyPassword(input.value),
                
            })[input.type]