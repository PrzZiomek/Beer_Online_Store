
export const flattenArraysOneLevel = (arr) => 
        arr.reduce((acc,item) => Array.isArray(item) ? ( acc = [...acc, ...item], acc ) : ( acc = [...acc, item], acc ), []);
