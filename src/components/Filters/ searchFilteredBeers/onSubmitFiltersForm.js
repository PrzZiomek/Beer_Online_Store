import { searchFilteredBeers } from './searchFilteredBeers';



export const onSubmitFiltersForm = (form) => 
                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    searchFilteredBeers(e);
                })

