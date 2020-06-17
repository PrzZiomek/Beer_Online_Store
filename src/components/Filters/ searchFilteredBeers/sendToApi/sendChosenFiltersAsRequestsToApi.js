import { coroutine } from '../../../getBeersFromAPI/coroutine';
import { filterOutChoices } from '../processingResponse/filterOutChoices';
import { separateInputsAndOptions } from '../processingResponse/separateInputsAndOptions';
//import { completePromises } from '../processingResponse/completePromises';
import { responsesFromAllRequests } from '../responsesFromAllRequests';
import { chosenFilterPromise } from '../processingResponse/handlersToProcessing/chosenFilterPromise';

export const sendChosenFiltersAsRequestsToApi = (elements) => {     
   
    const chosenFilters = filterOutChoices(elements);
    const [ inputs, option ] = separateInputsAndOptions(chosenFilters);
    const completePromises = (filters) => filters.reduce((acc,el) => ( acc = [...acc, chosenFilterPromise(el)], acc ), [])

    const promises = completePromises(inputs);
    const chosenYeast = option[0].value;    
    console.log(promises,chosenYeast);
    
    coroutine(function* (){
        try{
          const filteredBeers = yield * responsesFromAllRequests(promises, chosenYeast);
            if(filteredBeers){
                console.log(filteredBeers);
            }
        }catch(e){
            alert("!!!, "+ e);  
        }
    })
       
}
