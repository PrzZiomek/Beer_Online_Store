import { CURRENT_BEER } from "../actions";




const initState = null;


export const reducerToCurrentBeer = (state = initState, action) => {

    switch (action.type){
        case CURRENT_BEER:
            return action.value;
        default:
            return state;
    }
}










 




