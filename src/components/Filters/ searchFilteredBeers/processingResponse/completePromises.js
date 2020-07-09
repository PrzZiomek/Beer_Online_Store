import { chosenFilterPromise } from './handlersToProcessing/chosenFilterPromise';


export const completePromises = (filters) => 
         filters.reduce((acc,el) => ( acc = [...acc, chosenFilterPromise(el)], acc ), [])
