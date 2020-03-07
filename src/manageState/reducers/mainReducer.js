import { combineReducers } from "../combineReducers";
import { reducerToCart } from "./reducerToCart";
import { reducerToCurrentBeer } from "./reducerToCurrentBeer";
import { reducerToFavour } from "./reducerToFavour";
import { reducerToResponse } from "./reducerToResponse";



export const mainReducer = combineReducers({
    reducerToResponse,
    reducerToFavour,
    reducerToCart,
    reducerToCurrentBeer,
})
