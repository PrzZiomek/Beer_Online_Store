import { flattenArraysOneLevel } from './processingResponse/handlersToProcessing/flattenArraysOneLevel';
import { filterOutSpecyfiedYeasts } from './processingResponse/filterOutSpecyfiedYeasts';



                
export function* responsesFromAllRequests(promises, chosenYeast){

    let response = yield Promise.all(promises)
    let result =   yield flattenArraysOneLevel(response);
    let filteredBeers = yield filterOutSpecyfiedYeasts(chosenYeast)(result); 

  return filteredBeers 
 }

 
 
//  Naive version with Promise and then

 /* 

 export const responsesFromAllRequests = (promises, chosenYeast) => 
          Promise.all(promises)
                  .then(results => flattenArraysOneLevel(results))
                  .then(beers => filterOutSpecyfiedYeasts(chosenYeast)(beers))
*/
