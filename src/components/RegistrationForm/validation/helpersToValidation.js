import { store } from "../../../manageState/store";
import { validationOKaction, NoValidationAction } from "../../../manageState/actionCreators";


//export const dispatchValidationOK = (v) => store.dispatch(validationOKaction(v));

//export const dispatchNoValidation = (e) => store.dispatch(NoValidationAction(e));

export const dispatchValidationOK = (v) => console.log("validOK");
export const dispatchNoValidation = (e) => console.log(e.toString());
