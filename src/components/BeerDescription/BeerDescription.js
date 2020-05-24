import { store } from "../../manageState/store";
import { clearContentOf } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { createBeerDescription } from "./createBeerDescription";



export const BeerDescription = () => {

  const area = document.querySelector("main");
  const beer = store.getState().reducerToCurrentBeer;

  clearContentOf(area); 
  createBeerDescription(beer)
};


