
export const removePrevievCartModal = () => { 

    const modal = document.querySelector(".previevModal");
    const page = document.querySelector("body");

    if(modal) page.removeChild(page.lastChild) 
}
   
