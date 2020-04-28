import { rmvGroupFromFavoriteCartAndUpdateViev } from '../../showContentOf/rmvGroupOfBeerAndUpdateViev';
import { setClss, setOnclickFn, setTextContent } from "../../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../../pipeline";


export const createBtnToRemoveGroupOfBeersFromFavorite = (cl) => (txtContent) => (arg) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(rmvGroupFromFavoriteCartAndUpdateViev)(arg)
      )(document.createElement("button"));

    element.appendChild(btn);
  return element;
}