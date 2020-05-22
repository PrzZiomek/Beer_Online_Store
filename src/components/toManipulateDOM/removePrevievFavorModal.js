export const removePrevievFavorModal = () => { 

    const modal = document.querySelector(".favoriteModal");
    const page = document.querySelector("body");

    if(modal) page.removeChild(page.lastChild) 
}
   