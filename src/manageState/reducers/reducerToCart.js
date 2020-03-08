import { ADD_TO_CART, RMV_FROM_CART, CLEAR_CART } from "../actions";

const initState= [];

const removeBeer = (cart, beer) => cart.reduce((acc,item) => item[0].name === beer.name ? [...acc,item.slice(1)] : [...acc,item] , [] );



export const reducerToCart = (state = initState, action) => {

    switch (action.type){
        case ADD_TO_CART:
            return [...state, action.value];
        case RMV_FROM_CART: 
            return removeBeer(state, action.value);
        case CLEAR_CART:
             return [];
        default:
            return state;
    }
};
