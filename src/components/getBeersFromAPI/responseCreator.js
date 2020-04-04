import { doFetch } from "./doFetch";
import { fetchSuccessAction, fetchFailAction } from "../../manageState/actionCreators";
import { OfferOnPage } from "../OfferOnPage/OfferOnPage";



 export const createResponse = () => {

    return async (dispatch) => {
        
        const beers = await doFetch().catch(err => dispatch(fetchFailAction(err)));
        
         if(beers){ 
            dispatch(fetchSuccessAction(beers));
            OfferOnPage()
         }
    }
 }
