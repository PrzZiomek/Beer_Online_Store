import { createOfferOnPage } from '../components/OfferOnPage/createOfferOnPage';


const getNextBeers = (i) => fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=12`)
                                .then(res => res.json())
                                .then(res =>{                                 
                                    createOfferOnPage(res);
                                  console.log(i);
                                  
                                    }
                                ) 
/*
let options = {
  root: document.querySelector(".menuAndArea"),
  //treshold: 1.0,
} */     


export const infiniteScroll = () => {

  const sentry = document.querySelector(".sentinel");            console.log("createObs!@!!");
  let i = 0;

  const createObserver = new IntersectionObserver(entries => {
          
          if(entries.some(entry => entry.intersectionRatio > 0)){       console.log("teraz!");
             i++;
             getNextBeers(i); 
          }

  });

  createObserver.observe(sentry);

}

  
      


     