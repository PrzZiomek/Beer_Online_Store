import { doFetch } from "./doFetch";
import { fetchSuccess, fetchFail } from "../../manageState/actionCreators";



 export const createResponse = () => {

    return async (dispatch) => {
        
        const beers = await doFetch().catch(err => dispatch(fetchFail(err)));
         if(beers) dispatch(fetchSuccess(beers))
    }
 }
