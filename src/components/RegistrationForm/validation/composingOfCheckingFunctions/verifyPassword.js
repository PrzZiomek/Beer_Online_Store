import { checkPasswordLength } from "../checkingFunctions";
import { pipeline as compose } from "../../../../pipeline";


export const verifyPassword = (value) => () => compose(                                             
                                               checkPasswordLength
                                            )(value)
