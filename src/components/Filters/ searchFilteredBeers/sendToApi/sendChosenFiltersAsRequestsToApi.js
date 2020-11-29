import { store } from "../../../../manageState/store";
import { fetchBeginAction } from "../../../../manageState/actionCreators";
import { insertLoader } from '../../../getBeersFromAPI/loader/loader';
import { filterOutChoices } from '../processingResponse/filterOutChoices';
import { separateInputsAndOptions } from '../processingResponse/separateInputsAndOptions';
import { completePromises } from '../processingResponse/completePromises';
import { responseCreator } from '../responseCreator';



export const sendChosenFiltersAsRequestsToApi = (elements) => {     
   
    const chosenFilters = filterOutChoices(elements);
    const [ inputs, option ] = separateInputsAndOptions(chosenFilters);
    const promises = completePromises(inputs);
    const chosenYeast = option[0].value; 
       
    store.dispatch(fetchBeginAction("FILTERS"));
    store.dispatch(responseCreator(promises, chosenYeast));
    
    insertLoader()
}

