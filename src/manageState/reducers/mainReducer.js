import { combineReducers } from "../combineReducers";
import { reducerToCart } from "./higherOrderReducers/reducerToCart";
import { reducerToCurrentBeer } from "./caseFunctions/reducerToCurrentBeer";
import { reducerToResponse } from "./higherOrderReducers/reducerToResponse";



export const mainReducer = combineReducers({
    reducerToResponseForOffer: reducerToResponse("OFFER"),
    reducerToResponseForFilters: reducerToResponse("FILTERS"),
    reducerToResponseForJwt: reducerToResponse("JWT"),
    reducerToShopping: reducerToCart("SHOPPING_CART"),
    reducerToFavorite: reducerToCart("FAVORITE_CART"),
    reducerToCurrentBeer,
})
