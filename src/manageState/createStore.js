import { mainReducer } from "./reducers";




const validateAction = action => {

  if (!action || typeof action !== "object" || Array.isArray(action)) {
    throw new Error("Action must be an object!");
  }
  if (typeof action.type === "undefined") {
    throw new Error("Action must have a type!");
  }
};



export const createStore = (reducer, middleware) => {

  let state;

  const coreDispatch = (action) => {
            validateAction(action);
            state = reducer(state, action);
  };

  const getState = () => state;

  const store = {
    dispatch: coreDispatch,
    getState,
  };


  if(middleware){
    const dispatch = (action) => store.dispatch(action);
    store.dispatch = middleware({
      dispatch,
      getState
    })(coreDispatch)
  }

  return store;
};


/*

*/







export  const applyMiddleware = (...middlewares) => store => {

   
    const boundMiddlewares = middlewares.map(middleware =>
      middleware(store)
    );

    return boundMiddlewares.reduce((a, b) =>
      next => a(b(next))
    );
  };






