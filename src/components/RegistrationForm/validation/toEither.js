import { dispatchValidationOK, dispatchNoValidation } from "../validation/helpersToValidation";
import { Either } from "../../../monads/Either/Either";


export const toEither = (checkFn) =>  Either(checkFn)
                                         .match({
                                            Right: (v) => dispatchValidationOK(v),
                                            Left: (e) => dispatchNoValidation(e)          
                                         })