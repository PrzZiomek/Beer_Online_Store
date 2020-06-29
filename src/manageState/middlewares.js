





export const thunk = ({dispatch, getState}) => next => action => {
    
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
  
  
  
  
export const loggingMiddleware = ({getState}) => next => action => {

  // PLACE FOR TRACKING METHODS THE STATE FLOW
 /* console.info('before', getState());
  console.info('action', action);
  console.info('after', getState());
*/
  return next(action);
};


/*
const delayMiddleware = ({dispatch, getState}) => next => action => {

  console.info(">>>>> getState",getState());
  console.info('>>>>> action', action);

  return next(action);
};
  */