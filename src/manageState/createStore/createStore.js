<<<<<<< HEAD
import { storeMethods } from "./storeMethods";
=======
import { storeFactory } from "./storeFactory";
>>>>>>> 7b09fbd5440d57341d08c184c1d099d16c424ee3




export const createStore = (reducer, middleware) => {

  let state;
<<<<<<< HEAD
  const store = storeMethods(reducer,state);

  if(middleware){
      store.dispatch = middleware({
          dispatch: (action) => store.dispatch(action),
          getState: () => state,
        })(store.dispatch)
  };

  return store;
};


=======
  const store = storeFactory(reducer,state);

  if(middleware){
      store.dispatch = middleware({
        dispatch: (action) => store.dispatch(action),
        getState: () => state,
      })(store.dispatch)
    }
>>>>>>> 7b09fbd5440d57341d08c184c1d099d16c424ee3












