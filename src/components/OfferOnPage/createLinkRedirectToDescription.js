import { dispatchSetCurrentBeer } from "../handlersToShopping/handlersToShopping";
import { setClss, setOnclickFn, setPath, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";
import { insertDashesToPath } from "./insertDashesToPath";




export const createLinkRedirectToDescription = (cl) => (text) => (beer) => (element) => {

    const link = compose(
            setClss(cl),
            setPath(`#/opis/${insertDashesToPath(beer.name)}`),
            setTextContent(text),
            setOnclickFn(dispatchSetCurrentBeer)(beer)
     )(document.createElement("a"));
        
    element.appendChild(link);
  return element;
}
