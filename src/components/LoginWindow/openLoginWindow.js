import { createLoginWindow } from './createLoginWindow';


export const openLoginWindow = () => {

    const body = document.querySelector("body"); 
    
    body.appendChild(createLoginWindow());
}
  
