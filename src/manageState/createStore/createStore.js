import { storeFactory } from "./storeFactory";




export const createStore = (reducer, middleware) => {

  let state;
  const store = storeFactory(reducer,state);

  if(middleware){
      store.dispatch = middleware({
        dispatch: (action) => store.dispatch(action),
        getState: () => state,
      })(store.dispatch)
    }

  return store;
};











