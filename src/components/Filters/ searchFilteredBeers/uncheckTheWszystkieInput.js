import { filterOutChoices } from './processingResponse/filterOutChoices';

export const uncheckTheWszystkieInput = (form) => 
                form.addEventListener("change", (e) => {
                    
                    const dowolneInput = form.querySelector("[value='wszystkie']");
                    const elements = [...form.querySelectorAll(".filter")];
                    
                    console.log(elements);
                    
                    if(filterOutChoices(elements)) dowolneInput.checked = false;
                
                    console.log(dowolneInput.checked);
                    })