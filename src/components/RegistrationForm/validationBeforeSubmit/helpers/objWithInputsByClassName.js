export const objWithInputsByClassName = (inputs) => inputs.reduce((acc,item) => (acc[item.className] = item, acc), {});
