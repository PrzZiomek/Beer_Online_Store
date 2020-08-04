import { ADD_TO_SHOPPING_CART,
        ADD_TO_FAVORITE_CART,
        RMV_FROM_SHOPPING_CART,
        RMV_TYPE_FROM_SHOPPING_CART,
        RMV_FROM_FAVORITE_CART,
        CURRENT_BEER,
        FETCH_BEGIN_OFFER,
        FETCH_SUCCESS_OFFER,
        FETCH_FAIL_OFFER,
        FETCH_BEGIN_FILTERS,
        FETCH_SUCCESS_FILTERS,
        FETCH_FAIL_FILTERS,
        DECR_ORDER,
        INCR_ORDER,
        VALID,
        NOT_VALID,
        RMV_TYPE_FROM_FAVORITE_CART
        } from "./actions";



        
export const fetchBeginAction = () => ({
    type: FETCH_BEGIN_OFFER
})

export const fetchSuccessAction = (payload) => ({
    type: FETCH_SUCCESS_OFFER,
    payload
})

export const fetchFailAction = (error) => ({
    type: FETCH_FAIL_OFFER,
    error
})

export const fetchBeginActionToFilters = () => ({
    type: FETCH_BEGIN_FILTERS
})

export const fetchSuccessActionToFilters = (payload) => ({
    type: FETCH_SUCCESS_FILTERS,
    payload
})

export const fetchFailActionToFilters = (error) => ({
    type: FETCH_FAIL_FILTERS,
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