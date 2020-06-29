import { FILTERS_FETCH_BEGIN, FILTERS_FETCH_FAIL, FILTERS_FETCH_SUCCESS } from "../actions";


    
const initState = {
    items: [],
    loading: false,
    error: null
}



export const reducerToResponseForFilters = (state = initState, action) => {

    switch (action.type){
        case FILTERS_FETCH_BEGIN:
            return{
                ...state,
                loading: true,
            };
        case FILTERS_FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                items: action.payload
            };
        case FILTERS_FETCH_FAIL:
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