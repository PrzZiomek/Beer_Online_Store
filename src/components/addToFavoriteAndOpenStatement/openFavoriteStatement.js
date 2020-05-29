import { createDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM";
import { favoriteStatement } from './favoriteStatement';



export const openFavoriteStatement = (beer) => {

    const page = document.querySelector("body");  
    const favorStatementModal = createDiv("favoriteModal");
    const cartPreviev = favoriteStatement(beer);
    
    favorStatementModal.appendChild(cartPreviev);
  page.appendChild(favorStatementModal);
}