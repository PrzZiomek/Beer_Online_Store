import { FETCH_BEGIN, FETCH_FAIL, FETCH_SUCCESS } from "../actions";


    
const initState = {
    items: [],
    loading: false,
    error: null
}



export const reducerToResponse = (state = initState, action) => {

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