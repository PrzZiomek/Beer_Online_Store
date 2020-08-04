import { validateAction } from "./validateAction/validateAction";






export const createStore = (reducer, middleware) => {

  let state;

  const store = {
    dispatch: (action) => {
                validateAction(action);
                state = reducer(state, action);
      },
    getState: () => state,
  };


  if(middleware){
    const dispatch = (action) => store.dispatch(action);
    const getState = () => state;

    store.dispatch = middleware({
      dispatch,
      getState
    })(store.dispatch)
  }

  return store;
};








