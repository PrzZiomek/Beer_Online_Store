import { ADD_TO_FAVOUR, RMV_FROM_FAVOUR, CLEAR_FAVOUR } from "../actions";


const initState = [];


export const reducerToFavour = (state = initState, action) => {

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