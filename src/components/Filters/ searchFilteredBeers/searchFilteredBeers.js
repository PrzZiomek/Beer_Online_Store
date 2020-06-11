import { clearContentOf } from "../../toManipulateDOM/basisHandlersToManipulateDOM";


export const searchFilteredBeers = (e) => {

    const area = document.querySelector("main");
    const form = e.target;
    const colorOptions = form.querySelectorAll("input.colors");

    clearContentOf(area);
    console.log(colorOptions);
    
}