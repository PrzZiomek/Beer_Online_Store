import { createBeerLabel } from './createBeerLabel';



export const createOfferOnPage = (beers) => {

    const area = document.querySelector("main");
      
      beers.map(beer => {

        const wrapperDiv = createBeerLabel(beer)
          area.appendChild(wrapperDiv);
    });
};