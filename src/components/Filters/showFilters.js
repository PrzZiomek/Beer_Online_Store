import { createFilterOptions } from './createFilterOptions';



export const showFilters = (e) => {

    const button = e.target;
    const filterForm = createFilterOptions();
   // filterForm.classList.add("clearfix");
    button.appendChild(filterForm);
}