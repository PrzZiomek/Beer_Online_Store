// not such efficient pipeline
/* 
 export const pipeline = (...fns) => (x) => fns.reduce((acc,fn) => fn(acc), x);
*/



// replacement for functional pipeline to improve performance

export const pipeline = (...fns) => (x) => {

 let acc = x;
    for(const fn of fns){
        acc = fn(acc);     
    }
 return acc;
}
