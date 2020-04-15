import { dispatchAddToCurrentBeer } from "../handlersToShopping/handlersToShopping";
import { setClss, setOnclickFn, setPath, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";
import { insertDashesToPath } from "./insertDashesToPath";




export const createLinkRedirectToDescription = (cl) => (beer) => (element) => {

    const link = compose(
            setClss(cl),
            setPath(`#/opis/${insertDashesToPath(beer.name)}`),
            setTextContent("opis"),
            setOnclickFn(dispatchAddToCurrentBeer)(beer)
     )(document.createElement("a"));
        
    element.appendChild(link);
  return element;
}
