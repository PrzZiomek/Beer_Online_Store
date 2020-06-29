import { combineReducers } from "../combineReducers";
import { reducerToCart } from "./reducerToCart";
import { reducerToCurrentBeer } from "./reducerToCurrentBeer";
import { reducerToFavorite} from "./reducerToFavorite";
import { reducerToResponse } from "./reducerToResponse";
import { reducerToResponseForFilters } from './reducerToResponseForFilters';



export const mainReducer = combineReducers({
    reducerToResponse,
    reducerToFavorite,
    reducerToCart,
    reducerToCurrentBeer,
    reducerToResponseForFilters,
})
