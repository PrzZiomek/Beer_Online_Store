


export function* getNextBeersFromApi(i){

    const res = yield fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=12`);
    const beers = yield res.json();

 return beers;
}
