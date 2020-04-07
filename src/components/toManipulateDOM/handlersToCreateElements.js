
export const setClss = (cl) => (element) => {
     if(cl){ element.classList.add(cl) };
   return element;
}

export const setforAtr = (to) => (element) => {
  element.for = to;
return element;
}

export const setTextContent = (txtContent) => (element) => {
     element.textContent = txtContent;
   return element;
}

export const setSrc = (src) => (element) => {
    element.src = src;
  return element;
}

export const setOnclickFn = (fn) => (arg = null) => (element) => {
    element.addEventListener("click", () =>{ arg ?  fn(arg) : fn() });
 return element;
}

export const setPath = (path) => (element) => {
    element.href = path;
 return element;
}