import { createFilterOptions } from './createFilterOptions';



export const showFilters = (e) => {

    const button = e.target;
   // let optionsOpen = false;
   console.log(button.hasChildNodes());
   
    if(button !== e.currentTarget) return;
    const filterForm = createFilterOptions();   
    button.appendChild(filterForm);
  //  optionsOpen = !optionsOpen;
}