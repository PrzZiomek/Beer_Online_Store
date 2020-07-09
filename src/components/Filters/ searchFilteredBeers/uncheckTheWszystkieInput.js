import { filterOutChoices } from './processingResponse/filterOutChoices';


export const uncheckTheWszystkieInput = (form) => 
                form.addEventListener("change", () => {
                    
                    const dowolneInput = form.querySelector("[value='wszystkie']");
                    const elements = [...form.querySelectorAll(".filter")];
                    
                    if(filterOutChoices(elements)) dowolneInput.checked = false;
                 })