import { OfferOnPage } from "../OfferOnPage/OfferOnPage"


const refreshOffer = () => {

    const liElement = document.querySelector("li.offer");

    liElement.addEventListener("click", OfferOnPage )
};


refreshOffer();