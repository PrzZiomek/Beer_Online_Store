import { removePos } from './alghoritmsToUseInReducers';
import { ADD_TO_FAVORITE, RMV_FROM_FAVORITE, CLEAR_FAVORITE, RMV_TYPE_FROM_FAVORITE } from "../actions";


const initState = [];


export const reducerToFavorite = (state = initState, action) => {

    switch (action.type){
        case ADD_TO_FAVORITE:
            return [...state, action.value];
        case RMV_FROM_FAVORITE: 
            return removePos(state)(action.value);
        case RMV_TYPE_FROM_FAVORITE:
            return state.filter((x) => x.name !==  action.value.name )
        case CLEAR_FAVORITE:
             return [];
        default:
            return state;
    }
};