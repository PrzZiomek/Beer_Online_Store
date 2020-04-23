

export const removeLoader = () => {

    const header = document.querySelector("header");

    header.removeChild(header.lastChild);
}