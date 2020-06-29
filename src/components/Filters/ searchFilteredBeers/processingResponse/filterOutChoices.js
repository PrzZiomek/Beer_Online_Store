import { checkIfInput } from './handlersToProcessing/checkIfInput';


export const filterOutChoices = (elements) => 
            elements.filter(el => checkIfInput(el) ? el.checked : el.selected );


