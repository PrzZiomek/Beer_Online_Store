import { getBeersFromApi } from "./getBeersFromApi";
import {  coroutine } from './coroutine';
import { fetchSuccessAction, fetchFailAction } from "../../manageState/actionCreators";
import { OfferOnPage } from "../OfferOnPage/OfferOnPage";
import { removeLoader } from './loader/removeLoader';

/* 
// Simplest way - using async and await keyword


 export const createResponse = () => {

    return async (dispatch) => {
        
        const beers = await getBeersFromApi().catch(err => dispatch(fetchFailAction(err)));
        
         if(beers){ 
            dispatch(fetchSuccessAction(beers));
            removeLoader();
            OfferOnPage();
         }
    }
 }
 */

export const createResponse = () => {

   return (dispatch) => coroutine(function* (){

      try{
         const beers = yield * getBeersFromApi()       
         if(beers){ 
            dispatch(fetchSuccessAction(beers));
            removeLoader();
            OfferOnPage();
         }
      }
      catch(err){
         dispatch(fetchFailAction(err))
      }
      
   })
}





