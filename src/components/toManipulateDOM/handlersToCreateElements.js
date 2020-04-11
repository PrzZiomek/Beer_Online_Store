
export const setClss = (cl) => (element) => {
     if(cl){ element.classList.add(cl) };
   return element;
}

export const setforAtr = (to) => (element) => {
    element.for = to;
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

export const setOnclickFn = (fn) => (arg = "") => (element) => {
    element.addEventListener("click", () =>{ arg ?  fn(arg) : fn() });
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