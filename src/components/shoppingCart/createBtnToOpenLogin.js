import { openLoginWindow } from '../LoginWindow/openLoginWindow';
import { setClss, setOnclickFn, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { pipeline as compose } from "../../pipeline";




export const createBtnToOpenLogin = (cl) => (txtContent) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(openLoginWindow)()
       )(document.createElement("button"));
        
    element.appendChild(btn);
  return element;
}