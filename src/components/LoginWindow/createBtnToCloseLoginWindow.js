import { setClss, setOnclickFn, setTextContent } from "../toManipulateDOM/handlersToCreateElements";
import { removeLoginWindowModal } from "../toManipulateDOM/removeModal/removeLoginWindowModal";
import { pipeline as compose } from "../../pipeline";


const createButtonToCloseLoginWindow = (cl) => (txtContent) => (element) => {

    const btn = compose(
            setClss(cl),
            setTextContent(txtContent),
            setOnclickFn(removeLoginWindowModal)()
        )(document.createElement("button"));

    element.appendChild(btn);
 return element;
}



export const buttonToCloseLoginWindow = (element) => createButtonToCloseLoginWindow("loginWindow-close")("x")(element);  