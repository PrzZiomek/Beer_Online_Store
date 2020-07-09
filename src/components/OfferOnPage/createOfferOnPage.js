import { createBeerLabel } from './createBeerLabel';
import { createAndAddSentinel } from './createAndAddSentinel';



export const createOfferOnPage = (beers) => {

    const area = document.querySelector("main");
      
      beers.map(beer => {
        const beerWrapper = createBeerLabel(beer)
          area.appendChild(beerWrapper);
    });

    createAndAddSentinel(area);
};