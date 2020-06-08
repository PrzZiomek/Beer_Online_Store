import { showFilters } from './showFilters';


const filters = () => {

    const filtersButton = document.querySelector("button.filters");
    filtersButton.addEventListener("click", () => showFilters());
};


filters();