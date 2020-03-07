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




const initState = {
    beer: null,
};



export const reducerToCurrentBeer = (state = initState, action) => {

    switch (action.type){
        case CURRENT_BEER:
            return {
                ...state,
                beer: action.value,
            };
        default:
            return state;
    }
}










 




