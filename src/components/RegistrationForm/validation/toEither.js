import { dispatchValidationOK, dispatchNoValidation } from "../validation/helpersToValidation";


export const toEither = (checkFn) =>  Either(checkFn)
                                         .matchWith({
                                           Right: (v) => dispatchValidationOK(v),
                                           Left: (e) => dispatchNoValidation(e)          
                                         })