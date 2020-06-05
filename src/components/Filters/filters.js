import { showFilters } from './showFilters';


const filters = () => {

    const filtersButton = document.querySelector(".filters");
    filtersButton.addEventListener("click", (e) => showFilters(e));
};


filters();