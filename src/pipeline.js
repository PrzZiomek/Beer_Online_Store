
export const pipeline = (...fns) => (x) => fns.reduce((acc,fn) => fn(acc), x);
