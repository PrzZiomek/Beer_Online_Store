import {  coroutine } from '../../getBeersFromAPI/coroutine';
import { fetchSuccessAction, fetchFailAction } from "../../../manageState/actionCreators";
import { OfferOnPage } from "../../OfferOnPage/OfferOnPage";
import { removeLoader } from "../../getBeersFromAPI/loader/removeLoader";
import { responsesFromAllRequests } from './responsesFromAllRequests';




export const responseCreator = (promises, chosenYeast) => {

    return (dispatch) => coroutine(function* (){

        try{
          const filteredBeers = yield * responsesFromAllRequests(promises, chosenYeast);
            if(filteredBeers){
             dispatch(fetchSuccessAction(filteredBeers))   
             removeLoader();
             OfferOnPage();          
            }
        }catch(err){
            dispatch(fetchFailAction(err)) 
        }
    })
}