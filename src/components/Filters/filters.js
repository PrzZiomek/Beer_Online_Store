import { createFilterOptions } from './createFilterOptions';



const showFilters = () => {

    const filtersButton = document.querySelector(".filters");
    
    filtersButton.addEventListener("click", () => {
        createFilterOptions();
    });
};


showFilters();