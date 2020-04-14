import { checkIfIsEmailCorrect, checkIfIsTooBrief } from "../checkingFunctions";
import { pipeline as compose } from "../../../../pipeline";


export const verifyEmail = (value) => () => compose(
                                             checkIfIsTooBrief,
                                             checkIfIsEmailCorrect
                                           )(value)
