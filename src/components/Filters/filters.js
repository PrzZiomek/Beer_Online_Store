import { showFilters } from './showFilters';


const Filters = () => {

    const filtersButton = document.querySelector("button.filters");
    filtersButton.addEventListener("click", (e) => showFilters(e));
};


Filters();