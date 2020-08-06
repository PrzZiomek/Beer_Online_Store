import { validateAction } from "./validateAction/validateAction";




export const storeFactory = (reducer,state) => ({
            
            dispatch: (action) => {
                        validateAction(action);
                        state = reducer(state, action);
            },

            getState: () => state,
      });