
export const removeBeerFromNested = (cart,beer) => cart.reduce((acc,item) => item[0].name === beer.name ? [...acc,item.slice(1)] : [...acc,item] , [] );


export const removePos = (arr) => (beer) => {

                let tab = []; 
                for(let i = 0; i < arr.length; i++ ){
                  if(arr[i].name === beer.name){
                        arr.splice(i,1);
                        tab = [...arr];
                        return tab;
                    }
                }
            }


export const removeSpecifyBeer = (beers) => (givenName) =>  beers.filter((x) => x.name !==  givenName )