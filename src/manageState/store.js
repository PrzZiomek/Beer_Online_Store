import { createStore } from "./createStore";
import { mainReducer } from "./reducers";
import { applyMiddleware } from "./createStore";
import { thunk, loggingMiddleware } from "./middlewares";


//export const store = createStore(mainReducer);



/**/
  export const store = createStore(mainReducer, applyMiddleware(
        thunk,
        loggingMiddleware,
    ))
  
    