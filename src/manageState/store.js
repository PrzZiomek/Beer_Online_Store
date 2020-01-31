import { createStore } from "./createStore";
import { mainReducer } from "./reducers";
import { applyMiddleware, thunkMiddleware, loggingMiddleware } from "./createStore";

//export const store = createStore(mainReducer);


export const store = createStore(mainReducer, applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  ))