import { store } from "../../manageState/store";
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createOfferOnPage } from "./createOfferOnPage";
//import { createAndAddSentinel } from "./createAndAddSentinel";



export const OfferOnPage = () => {

    const area = document.querySelector("main");
    const beers = store.getState().reducerToResponse.items;

    clearContentOf(area);  
    createOfferOnPage(beers);
   // createAndAddSentinel(area);
};



        
      
       