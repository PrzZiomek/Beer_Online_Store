import { ADD_TO_CART,
        ADD_TO_FAVOUR,
        RMV_FROM_CART,
        RMV_FROM_FAVOUR,
        CLEAR_CART,
        CLEAR_FAVOUR,
        CURRENT_BEER,
        FETCH_BEGIN,
        FETCH_SUCCESS,
        FETCH_FAIL,
        DECR_ORDER,
        INCR_ORDER
        } from "./actions";



        
export const fetchBeginAction = () => ({
    type: FETCH_BEGIN
})

export const fetchSuccessAction = (payload) => ({
    type: FETCH_SUCCESS,
    payload
})

export const fetchFailAction = (error) => ({
    type: FETCH_FAIL,
    error
})

export const addToCartAction = (value) => ({
    type: ADD_TO_CART,
    value  
});

export const setCurrentBeerAction = (value) => ({
    type: CURRENT_BEER,
    value
})

export const removeFromCartAction = (value) => ({
    type: RMV_FROM_CART,
    value
})

export const incrOrderAction = () => ({
    type: INCR_ORDER,
})

export const decrOrderAction = () => ({
    type: DECR_ORDER
})