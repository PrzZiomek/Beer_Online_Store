import { validateAction } from "./validateAction/validateAction";




export const storeMethods = (reducer,state) => ({
            
            dispatch: (action) => {
                        validateAction(action);
                        state = reducer(state, action);
            },

            getState: () => state,
      });