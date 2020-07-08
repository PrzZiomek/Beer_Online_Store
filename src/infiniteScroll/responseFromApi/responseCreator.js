import { createOfferOnPage } from "../../components/OfferOnPage/createOfferOnPage";
import { coroutine } from "../../components/getBeersFromAPI/coroutine";
import { getNextBeersFromApi } from "./getNextBeersFromApi";



export const createResponse = (i) => {

    coroutine(function* (){
       
        try{
          const beers = yield * getNextBeersFromApi(i);
            createOfferOnPage(beers)
        }catch(err){
            console.log(err);            
        }
    })
}