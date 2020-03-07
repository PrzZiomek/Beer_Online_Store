
 const valueOfEntireCart = (arr) =>{ 

    let sum = arr.reduce((acc,poz) => acc + poz.abv, 0 );
  return Math.round(sum * 1000) / 1000
};

 export default valueOfEntireCart;