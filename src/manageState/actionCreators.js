import { ADD_TO_CART, ADD_TO_FAVOUR, ADD_TO_OFFER, RMV_FROM_CART, RMV_FROM_FAVOUR, RMV_FROM_OFFER, CLEAR_CART, CLEAR_FAVOUR, CLEAR_OFFER, CURRENT_BEER } from "./actions";


export const addToOffer = (value) => ({
    type: ADD_TO_OFFER,
    value  
});

export const setCurrentBeer = (value) => ({
    type: CURRENT_BEER,
    value
})