import { dispatchValidationOK, dispatchNoValidation } from "./helpersToValidation";
import  Either  from "../../../monads/Either/Either";


export const toEitherForValidateForm = (checkFn) =>   Either.of(checkFn)
                                                            .match({
                                                                Right: (v) => dispatchValidationOK(v),
                                                                Left: (e) => dispatchNoValidation(e)          
                                                                }) 