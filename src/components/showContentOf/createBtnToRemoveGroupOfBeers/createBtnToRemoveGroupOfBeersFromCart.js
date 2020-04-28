import { rmvGroupFromShoppigCartAndUpdateViev } from '../../showContentOf/rmvGroupOfBeerAndUpdateViev';
import { setClss, setOnclickFn, setTextContent } from "../../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../../pipeline";


export const createBtnToRemoveGroupOfBeersFromCart = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(rmvGroupFromShoppigCartAndUpdateViev)(arg)
      )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}