import { createFilterOptions } from './createFilterOptions';
import { onSubmitFiltersForm } from './ searchFilteredBeers/onSubmitFiltersForm';


export const showFilters = (e) => {

    const button = e.target;
    const filterForm = createFilterOptions();   
   
    if(button !== e.currentTarget || button.childNodes.length > 1) return;
   
    button.appendChild(filterForm);
    onSubmitFiltersForm(filterForm)
}

