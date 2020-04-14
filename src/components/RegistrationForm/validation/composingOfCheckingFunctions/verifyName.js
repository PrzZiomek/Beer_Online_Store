import { checkIfIncludesNumb, checkIfIsTooBrief } from "../checkingFunctions";
import { pipeline as compose } from "../../../../pipeline";


export const verifyName = (value) => () => compose(
                                             checkIfIsTooBrief,
                                             checkIfIncludesNumb
                                           )(value)
