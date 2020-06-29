
/* 

export const getBeersFromApi = async () => {

    const res = await fetch("https://api.punkapi.com/v2/beers?per_page=30");
    const beers = await res.json();

    return beers;
    }

*/

 
export function* getBeersFromApi(){
    
    const res = yield fetch("https://api.punkapi.com/v2/beers?per_page=40");   //12
    const beers = yield res.json();

    return beers;
}

