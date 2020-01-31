import { combineReducers } from "./combineReducers";
import { ADD_TO_CART, ADD_TO_FAVOUR, ADD_TO_OFFER, RMV_FROM_CART, RMV_FROM_FAVOUR, RMV_FROM_OFFER, CLEAR_CART, CLEAR_FAVOUR, CLEAR_OFFER, CURRENT_BEER } from "./actions";




const initStateArr = [];
const initStateObj = {
    beer: null,
};









const reducerToOffer = (state = initStateArr, action) => {

    switch (action.type){
        case ADD_TO_OFFER:
            return [...state, action.value];
        case RMV_FROM_OFFER: 
            return state.filter((x) => x.id !== action.value.id ) ;
        case CLEAR_OFFER:
             return [];
        default:
            return state;
    }
};


const reducerToFavour = (state = initStateArr, action) => {

    switch (action.type){
        case ADD_TO_FAVOUR:
            return [...state, action.value];
        case RMV_FROM_FAVOUR: 
            return state.filter((x) => x.id !== action.value.id ) ;
        case CLEAR_FAVOUR:
             return [];
        default:
            return state;
    }
};


const reducerToCart = (state = initStateArr, action) => {

    switch (action.type){
        case ADD_TO_CART:
            return [...state, action.value];
        case RMV_FROM_CART: 
            return state.filter((x) => x.id !== action.value.id ) ;
        case CLEAR_CART:
             return [];
        default:
            return state;
    }
};


const reducerToCurrentValues = (state = initStateObj, action) => {

    switch (action.type){
        case CURRENT_BEER:
            return {
                ...state,
                beer: action.value
            };
        default:
            return state;
    }
}







 


export const mainReducer = combineReducers({
                      reducerToFavour,
                      reducerToCart,
                      reducerToOffer,
                      reducerToCurrentValues
                  })


