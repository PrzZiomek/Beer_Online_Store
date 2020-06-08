import { createFilterOptions } from './createFilterOptions';



export const showFilters = () => {

    const button = document.querySelector("button.filters");
    const filterForm = createFilterOptions();
    console.log(button);
    
    button.appendChild(filterForm);
}