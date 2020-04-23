import { createText } from '../../toManipulateDOM/basisHandlersToManipulateDOM';


export const insertLoader = () => {

    const header = document.querySelector("header");

    createText("loader")("ładowanie...")(header);
}