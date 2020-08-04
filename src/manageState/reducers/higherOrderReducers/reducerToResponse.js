import { FETCH_BEGIN_OFFER,
         FETCH_FAIL_OFFER,
         FETCH_SUCCESS_OFFER,
         FETCH_BEGIN_FILTERS,
         FETCH_FAIL_FILTERS,
         FETCH_SUCCESS_FILTERS } from "../../actions";


    
const initState = {
    items: [],
    loading: false,
    error: null
}

const actionTypes = (type) => ({
    FETCH_BEGIN_OFFER,
    FETCH_SUCCESS_OFFER,
    FETCH_FAIL_OFFER,
    FETCH_BEGIN_FILTERS,
    FETCH_FAIL_FILTERS,
    FETCH_SUCCESS_FILTERS   
})[type]



export const reducerToResponse = (reducerFor = "") => 
        (state = initState, action) => {
            switch (action.type){
                case actionTypes(`FETCH_BEGIN_${reducerFor}`):
                    return{
                        ...state,
                        loading: true,
                    };
                case actionTypes(`FETCH_SUCCESS_${reducerFor}`):
                    return{
                        ...state,
                        loading:false,
                        items: action.payload
                    };
                case actionTypes(`FETCH_FAIL_${reducerFor}`):
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
