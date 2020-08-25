export const removeModal = (modalClss) => { 

    const modal = document.querySelector(modalClss);
    const page = document.querySelector("body");

    if(modal) page.removeChild(page.lastChild);
}