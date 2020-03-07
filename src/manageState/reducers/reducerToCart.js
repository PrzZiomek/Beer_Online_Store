import { ADD_TO_CART,
    ADD_TO_FAVOUR,
    RMV_FROM_CART,
    RMV_FROM_FAVOUR,
    CLEAR_CART,
    CLEAR_FAVOUR, 
    CURRENT_BEER,   
    FETCH_BEGIN,
    FETCH_FAIL,
    FETCH_SUCCESS,
    INCR_ORDER,
    DECR_ORDER } from "../actions";

const initState= [];



export const reducerToCart = (state = initState, action) => {

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
