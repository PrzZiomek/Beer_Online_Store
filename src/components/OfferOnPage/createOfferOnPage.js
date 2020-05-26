import { createBeerLabel } from './createBeerLabel';



export const createOfferOnPage = (beers) => {
  console.log("createOffer");
    const area = document.querySelector("main");
      
      beers.map(beer => {

        const wrapperDiv = createBeerLabel(beer)
          area.appendChild(wrapperDiv);
    });
};