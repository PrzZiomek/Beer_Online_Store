import { doFetch, coroutine } from "./doFetch";
import { fetchSuccessAction, fetchFailAction } from "../../manageState/actionCreators";
import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { removeLoader } from './loader/removeLoader';



export const createResponse = () => {

   return (dispatch) => coroutine(function* (){

      const beers = yield * doFetch() //.catch(err => dispatch(fetchFailAction(err)));;
      console.log(beers);
       
      if(beers){ 
         dispatch(fetchSuccessAction(beers));
         removeLoader();
         OfferOnPage();
      }
   })
  
}

/*

 export const createResponse = () => {

    return async (dispatch) => {
        
        const beers = await doFetch().catch(err => dispatch(fetchFailAction(err)));
        
         if(beers){ 
            dispatch(fetchSuccessAction(beers));
            removeLoader();
            OfferOnPage();
         }
    }
 }


 */
