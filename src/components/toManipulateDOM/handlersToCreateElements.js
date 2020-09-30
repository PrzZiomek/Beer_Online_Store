import { setAttr } from './setAttributes';


export const setClss = (v) => (el) => setAttr("className")(v)(el);

export const setforAtr = (v) => (el) => setAttr("for")(v)(el);

export const setAlt = (v) => (el) => setAttr("alt")(v)(el);

export const setName = (v) => (el) => setAttr("name")(v)(el);

export const setTextContent = (v) => (el) => setAttr("textContent")(v)(el);

export const setSrc = (v) => (el) => setAttr("src")(v)(el);

export const setPath = (v) => (el) => setAttr("href")(v)(el);

export const setType = (v) => (el) => setAttr("type")(v)(el);

export const setValue = (v) => (el) => setAttr("value")(v)(el);

export const setChecked = (v) => (el) => setAttr("checked")(v)(el);



export const setOnclickFn = (fn) => (arg = "") => (element) => {
  element.addEventListener("click", () => fn(arg));
return element;
}




