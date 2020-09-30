
export const setAttr = (attr) => (val = "") => (element) => {
     element[attr] = val;
  return element;
}


