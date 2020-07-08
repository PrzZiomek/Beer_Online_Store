import { moveSentinelAway } from "./moveSentinelAway";
import { createResponse } from "./responseFromApi/responseCreator";






export const infiniteScroll = () => {

  const sentinel = document.querySelector(".sentinel");   
  let i = 0;
  
  const createObserver = new IntersectionObserver(entries => {
          if(entries.some(entry => entry.intersectionRatio > 0)){       
             i++;
             moveSentinelAway(sentinel, i)
             createResponse(i); 
          }

  });

  createObserver.observe(sentinel);
}

  
      


     