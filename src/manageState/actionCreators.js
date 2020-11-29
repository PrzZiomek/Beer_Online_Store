import { ADD_TO_SHOPPING_CART,
        ADD_TO_FAVORITE_CART,
        RMV_FROM_SHOPPING_CART,
        RMV_TYPE_FROM_SHOPPING_CART,
        RMV_FROM_FAVORITE_CART,
        CURRENT_BEER,
        FETCH_BEGIN_,
        FETCH_SUCCESS_,
        FETCH_FAIL_,
        DECR_ORDER,
        INCR_ORDER,
        VALID,
        NOT_VALID,
        RMV_TYPE_FROM_FAVORITE_CART
        } from "./actions";



        
export const fetchBeginAction = (val) => ({
    type: FETCH_BEGIN_ + val
})

export const fetchSuccessAction = (val, payload) => ({
    type: FETCH_SUCCESS_ + val,
    payload
})

export const fetchFailAction = (val, error) => ({
    type: FETCH_FAIL_ + val,
    error
})



export const addToCartAction = (value) => ({
    type: ADD_TO_SHOPPING_CART,
    value  
});

export const removeFromCartAction = (value) => ({
    type: RMV_FROM_SHOPPING_CART,
    value
})

export const rmvWholeTypeFromCartAction = (value) => ({
    type: RMV_TYPE_FROM_SHOPPING_CART,
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



export const addToFavoriteAction = (value) => ({
    type: ADD_TO_FAVORITE_CART,
    value  
});

export const removeFromFavoriteAction = (value) => ({
    type: RMV_FROM_FAVORITE_CART,
    value
})

export const rmvWholeTypeFromFavoriteAction = (value) => ({
    type: RMV_TYPE_FROM_FAVORITE_CART,
    value
})



export const setCurrentBeerAction = (value) => ({
    type: CURRENT_BEER,
    value
})