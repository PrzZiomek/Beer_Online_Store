import { storeMethods } from "./storeMethods";



export const createStore = (reducer, middleware) => {

  let state;
  const store = storeMethods(reducer,state);

  if(middleware){
      store.dispatch = middleware({
          dispatch: (action) => store.dispatch(action),
          getState: () => state,
        })(store.dispatch)
  };

  return store;
};














