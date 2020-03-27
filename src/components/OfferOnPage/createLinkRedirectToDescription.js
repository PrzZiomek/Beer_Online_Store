import { addToCurrentBeer, addToFavour } from "../handlersToShopping/handlersToShopping";
import { addToCartAndOpenPreviev } from "../addToCartAndOpenPreviev/addToCartAndOpenPreviev";
import { setClss, setOnclickFn, setPath, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";
import { insertDashesToPath } from "./insertDashesToPath";




export const createLinkRedirectToDescription = (cl) => (beer) => (element) => {

    const link = compose(
            setClss(cl),
            setPath(`#/opis/${insertDashesToPath(beer.name)}`),
            setTextContent("opis"),
            setOnclickFn(addToCurrentBeer)(beer)
     )(document.createElement("a"));
        
    element.appendChild(link);
  return element;
}
