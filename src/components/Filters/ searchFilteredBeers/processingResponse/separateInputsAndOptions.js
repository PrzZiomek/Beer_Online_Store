import { checkIfInput } from './handlersToProcessing/checkIfInput';


 export const separateInputsAndOptions = (elements) => 
    elements.reduce((acc,el) => 
              checkIfInput(el) ? 
            ( acc[0] = [...acc[0], el], acc ) : 
            ( acc[1] = [...acc[1], el], acc ), [[],[]])
