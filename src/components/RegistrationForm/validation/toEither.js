import { dispatchValidationOK, dispatchNoValidation } from "../validation/helpersToValidation";
import  Either  from "../../../monads/Either/Either";


export const toEither = (checkFn) =>  Either.of(checkFn)
                                            .match({
                                                Right: (v) => dispatchValidationOK(v),
                                                Left: (e) => dispatchNoValidation(e)          
                                             })