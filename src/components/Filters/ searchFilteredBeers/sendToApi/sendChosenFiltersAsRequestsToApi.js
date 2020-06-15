
/*
export const sendChosenFiltersAsRequestsToApi = (elements) => {     

    const chosenFilters = filterOutChoices(elements);
    const [ inputs, option ] = separateInputsAndOptions(chosenFilters);
    const promises = completePromises(inputs);
    const chosenYeast = option[0].value;    
    
 coroutin(function* (){

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
*/