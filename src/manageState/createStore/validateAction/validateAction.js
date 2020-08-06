import { errIfIsHasNoType, errIfIsNotObject } from './checkingIfErrFns';





export const validateAction = (action) => {
        errIfIsNotObject(action);
        errIfIsHasNoType(action)
};