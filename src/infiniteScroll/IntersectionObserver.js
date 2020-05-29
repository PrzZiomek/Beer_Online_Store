//import { createOfferOnPage } from '../components/OfferOnPage/createOfferOnPage';
import { createDiv } from '../components/toManipulateDOM/basisHandlersToManipulateDOM';
import { createBeerLabel } from '../components/OfferOnPage/createBeerLabel';

/*
const scrollArea = document.querySelector(".menuAndArea");
const sentry = document.querySelector(".sentry");


const createOfferOnPage = (beers) => {

    const area = document.querySelector("main");
      
      beers.map(beer => {
        console.log(beers);
        

        const wrapperDiv = createBeerLabel(beer)
          area.appendChild(wrapperDiv);
    });

  //  scrollArea.appendChild(createDiv("sentry"));
};



const getNextBeers = (i) => fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=12`)
                                .then(res => res.json())
                                .then(res =>{                                 
                                    createOfferOnPage(res);
                                
                                    }
                                ) 

let options = {
  root: document.querySelector(".menuAndArea"),
  //treshold: 1.0,
}                              


 export const io = new IntersectionObserver(entries => {
console.log(entries[0].target);  
console.log(entries[0].intersectionRatio);  

            if(entries[0].intersectionRatio <= 0) {
                    return;
            }
            
            getNextBeers(2)
        },options);
        

      io.observe(sentry);

      */