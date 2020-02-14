import { combineReducers } from "./combineReducers";
import { ADD_TO_CART,
        ADD_TO_FAVOUR,
        RMV_FROM_CART,
        RMV_FROM_FAVOUR,
        CLEAR_CART,
        CLEAR_FAVOUR, 
        CURRENT_BEER,   
        FETCH_BEGIN,
        FETCH_FAIL,
        FETCH_SUCCESS } from "./actions";



const initStateArr = [];
const initStateObj = {
    beer: null,
};

const initStateToFetch = {
    items: [],
    loading: false,
    error: null
}



const reducerToResponse = (state = initStateToFetch, action) => {

            switch (action.type){
                case FETCH_BEGIN:
                    return{
                        ...state,
                        loading: true,
                    };
                case FETCH_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        items: action.payload
                    };
                case FETCH_FAIL:
                    return{
                        ...state,
                        loading: false,
                        items: [],
                        error: action.error
                    }
                default:
                    return state;
            }
        }






const reducerToFavour = (state = initStateArr, action) => {

    switch (action.type){
        case ADD_TO_FAVOUR:
            return [...state, action.value];
        case RMV_FROM_FAVOUR: 
            return state.filter((x) => x.id !== action.value.id ) ;
        case CLEAR_FAVOUR:
             return [];
        default:
            return state;
    }
};


const reducerToCart = (state = initStateArr, action) => {

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


const reducerToCurrentValues = (state = initStateObj, action) => {

    switch (action.type){
        case CURRENT_BEER:
            return {
                ...state,
                beer: action.value
            };
        default:
            return state;
    }
}







 


export const mainReducer = combineReducers({
                      reducerToResponse,
                      reducerToFavour,
                      reducerToCart,
                      reducerToCurrentValues
                  })


