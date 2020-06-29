import {  coroutine } from '../../getBeersFromAPI/coroutine';
import { fetchSuccessActionToFilters, fetchFailActionToFilters } from "../../../manageState/actionCreators";
import { ShowFilteredBeers } from '../ShowFilteredBeers';
import { removeLoader } from "../../getBeersFromAPI/loader/removeLoader";
import { responsesFromAllRequests } from './responsesFromAllRequests';



export const responseCreator = (promises, chosenYeast) => {

    return (dispatch) => coroutine(function* (){

        try{
          const filteredBeers = yield * responsesFromAllRequests(promises, chosenYeast);
           if(filteredBeers){
             dispatch(fetchSuccessActionToFilters(filteredBeers))   
             removeLoader();
             ShowFilteredBeers();          
            }
        }catch(err){
            dispatch(fetchFailActionToFilters(err)) 
        }
    })
}



// Naive version with Promise and then

/*
export const responseCreator = (promises, chosenYeast) => {   

    return (dispatch) => {
        
        responsesFromAllRequests(promises, chosenYeast)
            .then(
                filteredBeers => {
                        dispatch(fetchSuccessAction(filteredBeers))   
                        removeLoader();
                        OfferOnPage();          
                     },
                err => dispatch(fetchFailAction(err)) 
            )
    }       
}
*/