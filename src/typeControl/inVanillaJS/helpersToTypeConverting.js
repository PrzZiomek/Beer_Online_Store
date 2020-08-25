
export const checkIfThisIsFunction = (fn) => typeof fn === "function" && fn;

export const convertIfArgIsNotText = (x = "") => (fn) =>{ 
    const checkedArg = x.constructor === String ? x : String(x);
   return fn(checkedArg) 
}

export const convertIfArgIsNotHtmlEl = (elem) => (fn) =>{ 
     const checkedEl = elem instanceof Element || elem instanceof HTMLDocument ? elem : document.createElement("div");
   return fn(checkedEl)      
};
