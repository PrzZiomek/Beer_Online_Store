import { removePos, removeSpecifyBeer } from './alghoritmsToUseInReducers';
import { ADD_TO_CART,
         RMV_FROM_CART,
         CLEAR_CART,
         RMV_TYPE_FROM_CART } from "../actions";


const initState = [];





export const reducerToCart = (state = initState, action) => {

    switch (action.type){
        case ADD_TO_CART:
            return [...state, action.value];
        case RMV_FROM_CART: 
            return removePos(state)(action.value)
        case CLEAR_CART:
             return [];
        case RMV_TYPE_FROM_CART:
             return removeSpecifyBeer(state)(action.value.name)
        default:
            return state;
    }
};
