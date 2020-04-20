import { ADD_TO_CART,
        ADD_TO_FAVORITE,
        RMV_FROM_CART,
        RMV_TYPE_FROM_CART,
        RMV_FROM_FAVORITE,
        CLEAR_CART,
        CLEAR_FAVOUR,
        CURRENT_BEER,
        FETCH_BEGIN,
        FETCH_SUCCESS,
        FETCH_FAIL,
        DECR_ORDER,
        INCR_ORDER,
        VALID,
        NOT_VALID,
        RMV_TYPE_FROM_FAVORITE
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

export const validationOKaction = (value) => ({
    type: VALID,
    value
})

export const NoValidationAction = (error) => ({
    type: NOT_VALID,
    error
})

export const rmvWholeTypeFromCartAction = (value) => ({
    type: RMV_TYPE_FROM_CART,
    value
})

export const addToFavoriteAction = (value) => ({
    type: ADD_TO_FAVORITE,
    value  
});


export const removeFromFavoriteAction = (value) => ({
    type: RMV_FROM_FAVORITE,
    value
})

export const rmvWholeTypeFromFavoriteAction = (value) => ({
    type: RMV_TYPE_FROM_FAVORITE,
    value
})