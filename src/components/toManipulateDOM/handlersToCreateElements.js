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













/*
export const setClss = (cl = "") => (element) => {
    element.className = cl;
   return element;
}

export const setforAtr = (to) => (element) => {
    element.for = to;
  return element;
}

export const setAlt = (alt) => (element) => {
  element.alt = alt;
return element;
}

export const setName = (name) => (element) => {
    element.name = name;
  return element;
}

export const setTextContent = (textContent) => (element) => {
     element.textContent = textContent;
   return element;
}

export const setSrc = (src) => (element) => {
    element.src = src;
  return element;
}

export const setPath = (href) => (element) => {
    element.href = href;
 return element;
}

export const setType = (type) => (element) => {
  element.type = type;
return element;
}

export const setValue = (value) => (element) => {
  element.value = value;
return element;
}

*/