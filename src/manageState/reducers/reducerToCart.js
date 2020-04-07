import { ADD_TO_CART, RMV_FROM_CART, CLEAR_CART } from "../actions";

const initState= [];

//const removeBeerFromNested = (cart,beer) => cart.reduce((acc,item) => item[0].name === beer.name ? [...acc,item.slice(1)] : [...acc,item] , [] );
const removePos = (arr) => (beer) => {
    let tab = []; 
    for(let i = 0; i < arr.length; i++ ){
      if(arr[i].name === beer.name){
        arr.splice(i,1);
        tab = [...arr]
        return tab
      }
    }
  }


export const reducerToCart = (state = initState, action) => {

    switch (action.type){
        case ADD_TO_CART:
            return [...state, action.value];
        case RMV_FROM_CART: 
            return removePos(state)(action.value)
        case CLEAR_CART:
             return [];
        default:
            return state;
    }
};
