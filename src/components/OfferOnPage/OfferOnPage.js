import { store } from "../../manageState/store";
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createOfferOnPage } from "./createOfferOnPage";


export const OfferOnPage = () => {

    const area = document.querySelector("main");
    const beers = store.getState().reducerToResponse.items;
    area.appendChild(document.createElement("div"))
    clearContentOf(area);
      
    createOfferOnPage(beers);
  };



        
        
      
       