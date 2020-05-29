import { store } from "../../manageState/store";
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createOfferOnPage } from "./createOfferOnPage";
import { io } from '../../infiniteScroll/IntersectionObserver';
import { createDiv } from '../toManipulateDOM/basisHandlersToManipulateDOM';



export const OfferOnPage = () => {

    const area = document.querySelector("main");
    const beers = store.getState().reducerToResponse.items;

    clearContentOf(area);  
    createOfferOnPage(beers);
  };



        
        
      
       