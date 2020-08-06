import { removePos, removeSpecifyBeer } from '../alghoritmsToUseInReducers';
import { ADD_TO_SHOPPING_CART,
         RMV_FROM_SHOPPING_CART,
         CLEAR_SHOPPING_CART,
         RMV_TYPE_FROM_SHOPPING_CART,
         ADD_TO_FAVORITE_CART,
         RMV_FROM_FAVORITE_CART,
         CLEAR_FAVORITE_CART,
         RMV_TYPE_FROM_FAVORITE_CART, } from "../../actions";


const initState = [];


const actionTypes = (type) => ({
        ADD_TO_SHOPPING_CART,
        RMV_FROM_SHOPPING_CART,
        CLEAR_SHOPPING_CART,
        RMV_TYPE_FROM_SHOPPING_CART,
        ADD_TO_FAVORITE_CART,
        RMV_FROM_FAVORITE_CART,
        CLEAR_FAVORITE_CART,
        RMV_TYPE_FROM_FAVORITE_CART,  
    })[type]



export const reducerToCart = (reducerFor = "") => 
        (state = initState, action) => {
            switch (action.type){
                case actionTypes(`ADD_TO_${reducerFor}`):
                    return [...state, action.value];
                case actionTypes(`RMV_FROM_${reducerFor}`): 
                    return removePos(state)(action.value);
                case actionTypes(`CLEAR_${reducerFor}`):
                        return [];
                case actionTypes(`RMV_TYPE_FROM_${reducerFor}`):
                        return removeSpecifyBeer(state)(action.value.name);
                default:
                    return state;
                }
         };



