import { store } from "../../../manageState/store";
import { validationOKaction, NoValidationAction } from "../../../manageState/actionCreators";


export const dispatchValidationOK = (v) => store.dispatch(validationOKaction(v));

export const dispatchNoValidation = (e) => store.dispatch(NoValidationAction(e));

