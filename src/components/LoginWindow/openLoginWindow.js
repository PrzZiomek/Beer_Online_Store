import { createLoginWindow } from './createLoginWindow';



export const openLoginWindow = () => {

    const body = document.querySelector("body"); 
    const loginWindow = createLoginWindow();
    
    body.appendChild(loginWindow);
}
  
