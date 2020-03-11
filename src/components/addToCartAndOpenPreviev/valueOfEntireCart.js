
 const valueOfEntireCart = (arr) =>{ 

    let sum = arr.reduce((acc,poz) => acc + poz.abv, 0 );
  return (Math.round(sum * 100) / 100).toFixed(2);
};

 export default valueOfEntireCart;