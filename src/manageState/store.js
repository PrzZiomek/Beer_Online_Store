import { createStore } from "./createStore/createStore";
import { mainReducer } from "./reducers/mainReducer";
import { applyMiddleware } from "./applyMiddleware";
import { thunk, loggingMiddleware } from "./middlewares";



  export const store = createStore(mainReducer, applyMiddleware(
        thunk,
        loggingMiddleware,
    ));
  
    