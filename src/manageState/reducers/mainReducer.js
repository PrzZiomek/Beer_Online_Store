import { combineReducers } from "../combineReducers";
import { reducerToCart } from "./reducerToCart";
import { reducerToCurrentBeer } from "./reducerToCurrentBeer";
import { reducerToFavorite} from "./reducerToFavorite";
import { reducerToResponse } from "./reducerToResponse";



export const mainReducer = combineReducers({
    reducerToResponse,
    reducerToFavorite,
    reducerToCart,
    reducerToCurrentBeer,
})
