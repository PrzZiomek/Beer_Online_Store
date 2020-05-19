


 export const coroutine = (gen) => {

        const iter = gen();

        const contin = ({ done, value }) => done ? value : Promise.resolve(value)
                                                                .then(
                                                                    res => contin(iter.next(res)),
                                                                    err => contin(iter.throw(err))
                                                                );
        return contin(iter.next())
}



export function* doFetch(){
    
    const res = yield fetch("https://api.punkapi.com/v2/beers?per_page=60");
    
    const beers = yield res.json();

    return beers;
}

/*
export const doFetch = coroutine(function* getBeers(){
    console.log("yeah!!!");
    
    const res = yield fetch("https://api.punkapi.com/v2/beers?per_page=60");
    const beers = yield res.json();

    return beers;
})

*/
/*
export const doFetch = async () => {

    const res = await fetch("https://api.punkapi.com/v2/beers?per_page=60");
    const beers = await res.json();

    return beers;
    }

   */