import { clearContentOf } from "../../toManipulateDOM/basisHandlersToManipulateDOM";
import { sendChosenFiltersAsRequestsToApi } from './sendToApi/sendChosenFiltersAsRequestsToApi';

 
export const searchFilteredBeers = (e) => {

    const area = document.querySelector("main");
    const form = e.target;
    const elements = [...form.querySelectorAll(".filter")];
    
    sendChosenFiltersAsRequestsToApi(elements)
    clearContentOf(area);
}