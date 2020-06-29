import { store } from "../../manageState/store";
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createOfferOnPage } from "../OfferOnPage/createOfferOnPage";


export const ShowFilteredBeers = () => {

    const area = document.querySelector("main");
    const beers = store.getState().reducerToResponseForFilters.items;
console.log("showfiltered", beers);

    clearContentOf(area);  
    createOfferOnPage(beers);
};
